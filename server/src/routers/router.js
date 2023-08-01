const express = require('express');
const router = express.Router();
const story = require('../controllers/story');

router.post('/createStory', story.createStory);
router.get('/getStories', story.getStories);

module.exports = router;
