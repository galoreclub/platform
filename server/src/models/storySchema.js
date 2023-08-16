import BagStory from './storyModel.js';
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

const storyTypeDefs = `
  scalar Date

  type BagStory {
    shopify_user_id: String!
    bag_id: String!
    action: String!
    timestamp: Date
  }

  type Query {
    bagStory(shopify_user_id: String!): [BagStory]
  }

  type Mutation {
    addBagStory(shopify_user_id: String!, bag_id: String!, action: String!): BagStory
    updateBagStory(story_id: String!, action: String!): BagStory
    deleteBagStory(story_id: String!): Boolean
  }
`;

const storyResolvers = {
  Date: dateScalar,
  Query: {
    bagStory: (root, { shopify_user_id }) => BagStory.find({ shopify_user_id }),
  },
  Mutation: {
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
export { storyTypeDefs, storyResolvers };
