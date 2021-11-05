const {Router} = require('express')
const formsController = require('../controllers/formsController')
const auth = require('../middleware/authMiddleware')
const router = Router()

router.get('/:formId', formsController.getForm)
router.post('/create', auth, formsController.createForm)

module.exports = router