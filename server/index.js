import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import executableSchema from './src/schema.js';
import dotenv from 'dotenv';
import { connectToDb } from './src/db.js';

dotenv.config();
connectToDb();

const server = new ApolloServer({
  typeDefs: executableSchema.typeDefs,
  resolvers: executableSchema.resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
