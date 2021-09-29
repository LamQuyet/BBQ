var express = require('express')
var router = express.Router()
const accountController = require('../src/app/controllers/AccountController')

router.post('/register', accountController.Register)
router.post('/login', accountController.Login)

module.exports = router