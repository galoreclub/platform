import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
const { default: graphqlUploadExpress } = await import(
  'graphql-upload/graphqlUploadExpress.mjs'
);
import { default as GraphQLUpload } from 'graphql-upload/GraphQLUpload.mjs';

import executableSchema from './src/schema.js';
import { connectToDb } from './src/db.js';

// Connect to your database
connectToDb();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173', 'https://galore.club', 'https://galore-headless-test-beejathon.vercel.app'];

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs: executableSchema.typeDefs,
  resolvers: {
    ...executableSchema.resolvers,
    Upload: GraphQLUpload // Add the Upload scalar
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  cors({
      origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
          const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204,
  }),
  bodyParser.json(),
  graphqlUploadExpress(), // Add this middleware to handle file uploads
  expressMiddleware(server),
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);

