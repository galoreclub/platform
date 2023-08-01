require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const app = express();
const router = require('./src/routers/router');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello from Confirmation Story</h1>');
});

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
