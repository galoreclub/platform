import Bag from './bagModel.js';
// import { createWriteStream } from 'fs';

const bagTypeDefs = `
  scalar Upload

  type Image {
    data: String
    filename: String
    mimetype: String
    encoding: String
  }

  type Bag {
    bag_id: String!
    brand: String!
    model: String!
    size: String!
    serialNum: Int!
    material: String!
    price: Float!
    images: [Image]
  }

  type Query {
    bags: [Bag]
  }

  type Mutation {
    addBag(bag_id: String!, brand: String!, model: String!, size: String!, serialNum: Int!, material: String!, price: Float!, images: [Upload!]): Bag
    updateBag(bag_id: String!, brand: String!, model: String!, size: String!, serialNum: Int!, material: String!, price: Float!, images: [Upload!]): Bag
    deleteBag(bag_id: String!): Boolean
  }
`;

const bagResolvers = {
  Query: {
    bags: async () => {
      const bags = await Bag.find();

      return bags.map((bag) => ({
        ...bag._doc,
        images: bag.images.map((image) => ({
          data: image.toString('base64'), // Convert Buffer to base64 string
          mimetype: 'image/jpeg', // This is just an example. In a real scenario, you'd determine the mime type based on the image or store it in the database.
        })),
      }));
    },
  },
  Mutation: {
    addBag: async (
      _,
      { bag_id, brand, model, size, serialNum, material, price, images }
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
          bag_id,
          brand,
          model,
          size,
          serialNum,
          material,
          price,
          images: imageBuffers, // Storing the image as a buffer
        });
        await newBag.save();
        return newBag;
      } catch (error) {
        console.error('Error adding bag:', error);
        throw new Error('Failed to add bag');
      }
    },
    updateBag: async (
      _,
      { bag_id, brand, model, size, serialNum, material, price, image }
    ) => {
      return Bag.findOneAndUpdate(
        { bag_id },
        { bag_id, brand, model, size, serialNum, material, price },
        { new: true }
      );
    },
    deleteBag: async (_, { bag_id }) => {
      await Bag.findOneAndDelete({ bag_id });
      return true;
    },
  },
};

export { bagTypeDefs, bagResolvers };
