const nodemailer = require('nodemailer')
const pathDir = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)

const viewPath = pathDir.resolve(__dirname, '..', 'views', 'emails')

transport.use(
  'compile',
  hbs({
    viewEngine: exphbs.create({
      partialsDir: pathDir.resolve(viewPath, 'partials')
    }),
    viewPath,
    extName: '.hbs'
  })
)

module.exports = transport
