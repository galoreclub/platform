const dynamoDB = require('../models/index');
const storySchema = require('../models/story');

exports.createStory = async (req, res) => {
  // Validate the data
  const { error } = storySchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const params = {
    TableName: 'Stories', // replace with your table name
    Item: req.body,
  };

  try {
    await dynamoDB.put(params).promise();
    res.status(201).json({ story: params.Item });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStories = async (req, res) => {
  // Validate the data
  const { error } = storySchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const params = {
    TableName: 'Stories', // replace with your table name
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    res.status(201).json({ stories: data.Items });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
