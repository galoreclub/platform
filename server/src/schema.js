import { bagTypeDefs, bagResolvers } from './models/bagSchema.js';
import { storyTypeDefs, storyResolvers } from './models/storySchema.js';

const typeDefs = `
  scalar Date
  ${bagTypeDefs}
  ${storyTypeDefs}
`;

const resolvers = {
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
