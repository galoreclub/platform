import mongoose from 'mongoose';

const bagSchema = new mongoose.Schema({
  bag_id: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  serialNum: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    required: false,
  },
  images: [{
    type: Buffer,
    required: false,
  }]
});

export default mongoose.model('Bag', bagSchema);
