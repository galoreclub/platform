const Joi = require('joi');

const storySchema = Joi.object({
  // TODO Think of what to put as a PK (string)
  PRIMARY_KEY: Joi.number().required(),
  brand: Joi.string().required(),
  size: Joi.string().required(),
  serialNum: Joi.number().required(),
  material: Joi.string(),
  model: Joi.string(),
  // TODO Add later on?
  // userID: Joi.string(),
  // photoUrl: Joi.array().items(Joi.string()),
});

module.exports = storySchema;
