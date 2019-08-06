const joi = require('joi')

module.exports = {
  body: {
    name: joi.string().required(),
    email: joi
      .string()
      .email()
      .required(),
    password: joi
      .string()
      .required()
      .min(6)
  }
}
