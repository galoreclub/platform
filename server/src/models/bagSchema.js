import Bag from './bagModel.js';

const bagTypeDefs = `
  type Bag {
    bag_id: String!
    brand: String!
    model: String!
    size: String!
    serialNum: Int!
    material: String!
    price: Float!
  }

  type Query {
    bags: [Bag]
  }

  type Mutation {
    addBag(bag_id: String!, brand: String!, model: String!, size: String!, serialNum: Int!, material: String!, price: Float!): Bag
    updateBag(bag_id: String!, brand: String!, model: String!, size: String!, serialNum: Int!, material: String!, price: Float!): Bag
    deleteBag(bag_id: String!): Boolean
  }
`;

const bagResolvers = {
  Query: {
    bags: () => Bag.find(),
  },
  Mutation: {
    addBag: async (
      _,
      { bag_id, brand, model, size, serialNum, material, price }
    ) => {
      try {
        const newBag = new Bag({
          bag_id,
          brand,
          model,
          size,
          serialNum,
          material,
          price,
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
      { bag_id, brand, model, size, serialNum, material, price }
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
