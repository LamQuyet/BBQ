var express = require('express')
var router = express.Router()
const billController = require('../src/app/controllers/BillController')

router.post('/order', billController.Order)
router.use('/getbill', billController.getBill)
router.use('/history', billController.History)
router.use('/newbills', billController.getNewBills)
router.use('/billscanceled', billController.getCanceledBills)
router.post('/accept', billController.Update)

module.exports = router