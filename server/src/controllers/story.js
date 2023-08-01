const express = require('express');
const Story = require('../models/story');

exports.createStory = async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json({ story });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// module.exports = { createStory };
