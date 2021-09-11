var express = require('express')
var router = express.Router()
const foodController = require('../src/app/controllers/FoodControllers')

router.use('/getAllFood', foodController.getAll)
router.use('/getBBQ', foodController.getBBQ)
router.use('/getHotpot', foodController.getHotpot)
router.use('/getDrink', foodController.getDrink)

module.exports = router