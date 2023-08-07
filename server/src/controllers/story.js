const Story = require('../models/story');

const createStory = async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json({ story });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json({ stories });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createStory, getStories };
