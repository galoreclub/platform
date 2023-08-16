import mongoose from 'mongoose';

export const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));
};
