import { bagTypeDefs, bagResolvers } from './models/bagSchema.js';
import { storyTypeDefs, storyResolvers } from './models/storySchema.js';
import { default as GraphQLUpload } from 'graphql-upload/GraphQLUpload.mjs';

const typeDefs = `
  ${bagTypeDefs}
  ${storyTypeDefs}
`;

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...bagResolvers.Query,
    ...storyResolvers.Query,
  },
  Mutation: {
    ...bagResolvers.Mutation,
    ...storyResolvers.Mutation,
  },
};

export default {
  typeDefs,
  resolvers,
};
