import Bag from './bag.js';
import BagStory from './story.js';
import { GraphQLScalarType, Kind } from 'graphql';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert AST integer to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const typeDefs = `
  scalar Date

  type Bag {
    bag_id: String!
    brand: String!
    model: String!
    size: String!
    serialNum: Int!
    material: String!
    price: Float!
  }

  type BagStory {
    shopify_user_id: String!
    bag_id: String!
    action: String!
    timestamp: Date
  }

  type Query {
    bags: [Bag]
    bagStory(shopify_user_id: String!): [BagStory]
  }

  type Mutation {
    addBag(bag_id: String!, brand: String!, model: String!, size: String!, serialNum: Int!, material: String!, price: Float!): Bag
    updateBag(bag_id: String!, brand: String!, model: String!, size: String!, serialNum: Int!, material: String!, price: Float!): Bag
    deleteBag(bag_id: String!): Boolean
    addBagStory(shopify_user_id: String!, bag_id: String!, action: String!): BagStory
    updateBagStory(story_id: String!, action: String!): BagStory
    deleteBagStory(story_id: String!): Boolean
  }
`;

const resolvers = {
  Date: dateScalar,
  Query: {
    bags: () => Bag.find(),
    bagStory: (root, { shopify_user_id }) => BagStory.find({ shopify_user_id }),
  },
  Mutation: {
    addBag: async (
      _,
      { bag_id, brand, model, size, serialNum, material, price }
    ) => {
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
    addBagStory: async (_, { shopify_user_id, bag_id, action }) => {
      const newEntry = new BagStory({
        shopify_user_id,
        bag_id,
        action,
        timestamp: new Date(),
      });
      await newEntry.save();
      return newEntry;
    },
    updateBagStory: async (_, { story_id, action }) => {
      return BagStory.findByIdAndUpdate(story_id, { action }, { new: true });
    },
    deleteBagStory: async (_, { story_id }) => {
      await BagStory.findByIdAndDelete(story_id);
      return true;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
