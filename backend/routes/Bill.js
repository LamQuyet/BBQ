var express = require('express')
var router = express.Router()
const billController = require('../src/app/controllers/BillController')

router.post('/order', billController.Order)
router.use('/getbill', billController.getBill)

module.exports = router