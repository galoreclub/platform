import mongoose from 'mongoose';

const bagSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  serialNum: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    require: false,
  },
  model: {
    type: String,
    required: false,
  },
  // No price now
  images: [{
    type: Buffer,
    required: false,
  }],
  confirmationNum: {
    type: Number,
    required: false, // or true, depending on your use case
  },
});

export default mongoose.model('Bag', bagSchema);
