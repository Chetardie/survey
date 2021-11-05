const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const formsRouter = require('./formsRouter')

router.use('/auth', authRouter)
router.use('/forms', formsRouter)

module.exports = router