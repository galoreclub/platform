const express = require('express');
const router = express.Router();
const story = require('../controllers/story');

router.post('/createStory', story.createStory);

module.exports = router;
