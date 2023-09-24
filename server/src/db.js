import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      user: process.env.DB_CLUSTER_USERNAME,
      pass: process.env.DB_CLUSTER_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));
};
