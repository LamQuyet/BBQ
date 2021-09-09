var express = require('express')
var router = express.Router()
const foodController = require('../src/app/controllers/FoodControllers')

router.use('/getfood', foodController.getAll)

module.exports = router