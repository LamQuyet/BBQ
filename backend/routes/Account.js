var express = require('express')
var router = express.Router()
const accountController = require('../src/app/controllers/AccountController')

router.post('/register', accountController.Register)
router.post('/login', accountController.Login)
router.get('/getAccount', accountController.getAccount)
router.post('/deleteAccount', accountController.Delete)
router.post('/updateAccount', accountController.Update)

module.exports = router