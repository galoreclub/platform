import mongoose from 'mongoose';
const uri = 'mongodb+srv://cluster0.auxo4cw.mongodb.net/bagsAndStoriesDB?retryWrites=true&w=majority';
import dotenv from 'dotenv';
dotenv.config();

export const connectToDb = () => {
  mongoose
    .connect(uri, {
      user: process.env.DB_CLUSTER_USERNAME,
      pass: process.env.DB_CLUSTER_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));
};
