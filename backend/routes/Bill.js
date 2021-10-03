var express = require('express')
var router = express.Router()
const billController = require('../src/app/controllers/BillController')

router.post('/order', billController.Order)

module.exports = router