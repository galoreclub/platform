const mongoose = require('./index');

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

