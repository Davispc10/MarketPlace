const joi = require('joi')

module.exports = {
  body: {
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required()
  }
}
