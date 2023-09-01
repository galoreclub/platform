import Bag from './bagModel.js';
// import { createWriteStream } from 'fs';
import fetch from 'node-fetch';

const bagTypeDefs = `
  scalar Upload

  type Image {
    data: String
    filename: String
    mimetype: String
    encoding: String
  }

  type PipedreamResponse {
    id: String
    success: Boolean
    message: String
  }

  type Bag {
    _id: String!
    brand: String!
    size: String!
    condition: String!
    serialNum: String!
    material: String!
    model: String!
    images: [Image]
  }

  type Query {
    bags: [Bag]
  }

  type Mutation {
    addBag(brand: String!, size: String!, condition: String!, serialNum: String!, material: String!, model: String!, images: [Upload!]): Bag
    updateBag(brand: String!, model: String!, size: String!, serialNum: Int!, material: String!, price: Float!, images: [Upload!]): Bag
    deleteBag(_id: String!): Boolean
    triggerPipedreamEvent(bag_id: String!): PipedreamResponse
  }
`;

const bagResolvers = {
  Query: {
    bags: async () => {
      try {
        const bags = await Bag.find();

        return bags.map((bag) => ({
          _id: bag._id.toString(),
          ...bag._doc,
          images: bag.images.map((image) => ({
            data: image.toString('base64'), // Convert Buffer to base64 string
            mimetype: 'image/jpeg', // This is just an example. In a real scenario, you'd determine the mime type based on the image or store it in the database.
          })),
        }));
      } catch (error) {
        console.error("Database error:", err);
        throw new Error("Unable to fetch bags");
      }
    },
  },
  Mutation: {
    addBag: async (
      _,
      { brand, size, condition, serialNum, material, model, images }
    ) => {
      try {
        // Use a Promise to handle the stream and convert it to a buffer
        const imageBuffers = await Promise.all(
          images.map(async (image) => {
            const { createReadStream } = await image;
            const chunks = [];
            return new Promise((resolve, reject) => {
              createReadStream()
                .on('data', (chunk) => chunks.push(chunk))
                .on('end', () => resolve(Buffer.concat(chunks)))
                .on('error', reject);
            });
          })
        );

        // Create the new bag with the buffer containing the image data
        const newBag = new Bag({
          brand,
          size,
          condition,
          serialNum,
          material,
          model,
          images: imageBuffers, // Storing the image as a buffer
        });
        await newBag.save();
        return newBag;
      } catch (error) {
        console.error('Error adding bag:', error);
        throw new Error('Failed to add bag');
      }
    },
    // updateBag: async (
    //   _,
    //   { brand, model, size, serialNum, material, price, image }
    // ) => {
    //   return Bag.findOneAndUpdate(
    //     { _id },
    //     { _id, brand, model, size, serialNum, material, price },
    //     { new: true }
    //   );
    // },
    // deleteBag: async (_, { _id }) => {
    //   await Bag.findOneAndDelete({ _id });
    //   return true;
    // },
    triggerPipedreamEvent: async (_, _id) => {
      try {
        const pipedreamEndpoint = process.env.PIPEDREAM_ENDPOINT;
        const payload = _id;
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        };

        const response = await fetch(pipedreamEndpoint, config);

        if (response.ok) {
          const data = await response.json();
          return {
            id: data.id || "Unknown ID",
            success: true,
            message: "Successfully triggered Pipedream event",
          };
        } else {
          return {
            id: "Unknown ID",
            success: false,
            message: `Failed to trigger Pipedream event, status code: ${response.status}`,
          };
        }
      } catch (error) {
        console.error(`An error occurred while sending the trigger to Pipedream: ${error}`);
        return {
          id: "Unknown ID",
          success: false,
          message: `An error occurred: ${error.message}`,
        };
      }
    }
  },
};

export { bagTypeDefs, bagResolvers };
