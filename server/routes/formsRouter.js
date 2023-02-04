const {Router} = require('express')
const formsController = require('../controllers/formsController')
const auth = require('../middleware/authMiddleware')
const validate = require('../validators')
const router = Router()


router.get('/all/:formId', formsController.getForm)
router.get('/all', auth, formsController.getAllForms)
router.get('/details/:formId', auth, formsController.getFormDetails)
router.post('/create', auth, formsController.createForm)
router.post('/submit', validate('submitForm'), formsController.submitForm)

module.exports = router