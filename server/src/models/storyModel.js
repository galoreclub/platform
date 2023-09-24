import mongoose from 'mongoose';

const bagStorySchema = new mongoose.Schema({
  shopify_user_id: {
    type: String,
    required: true,
  },
  bag_id: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
  },
  // currentOwner?
});

export default mongoose.model('BagStory', bagStorySchema);
