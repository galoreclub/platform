require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true, //needed to prevent warning error
  useUnifiedTopology: true,
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch(error => console.error('Failed to connect to MongoDB', error));

module.exports = mongoose;
