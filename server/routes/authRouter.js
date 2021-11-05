const {Router} = require('express')
const validate = require('../validators')
const router = Router()
const authController = require('../controllers/authController')

router.post('/login', validate('login'), authController.login)
router.post('/register', validate('register'),  authController.register)

module.exports = router