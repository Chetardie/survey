const { body } = require('express-validator')

module.exports = validate = (method) => {
  switch (method) {
    case 'login': {
      return [
        body('email', 'Invalid email').exists().isEmail(),
        body('password', 'Invalid password').exists().isLength({ min: 8 }),
      ]
    }
    case 'register': {
      return [
        body('name', 'Invalid name').exists().isLength({ max: 60 }),
        body('email', 'Invalid email').exists().isEmail(),
        body('password', 'Invalid password').exists().isLength({ min: 8 }),
      ]
    }
    case 'submitForm': {
      return [
        body('formId', 'Invalid form Id').exists(),
        body('fields', 'Invalid form').exists()
      ]
    }
  }
}