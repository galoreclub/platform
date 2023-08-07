const express = require('express');
const router = express.Router();
const { createStory, getStories } = require('../controllers/story');

router.post('/createStory', createStory);
router.get('/getStories', getStories);

module.exports = router;
