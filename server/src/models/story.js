const mongoose = require('./index')

const storySchema = new mongoose.Schema({
  brand: {
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
  },
  model: {
    type: String,
  },
  // TODO Add later on?
  // userID: {
  //   type: String,
  // },
  // photoUrl: {
  //   type: [String],
  // },
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
