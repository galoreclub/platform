import { bagTypeDefs, bagResolvers } from './models/bagSchema.js';
import { storyTypeDefs, storyResolvers } from './models/storySchema.js';

const typeDefs = `
  scalar Date
  ${bagTypeDefs}
  ${storyTypeDefs}
`;

const resolvers = {
  ...bagResolvers,
  ...storyResolvers,
};

export default {
  typeDefs,
  resolvers,
};
