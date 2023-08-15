import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import executableSchema from './src/models/index.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true, //needed to prevent warning error
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

const server = new ApolloServer({
  typeDefs: executableSchema.typeDefs,
  resolvers: executableSchema.resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
