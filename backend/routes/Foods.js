var express = require('express')
var router = express.Router()
const foodController = require('../src/app/controllers/FoodControllers')

// router.use('/search', foodController.Search)
router.use('/getBBQ', foodController.getBBQ)
router.use('/getHotpot', foodController.getHotpot)
router.use('/getDrink', foodController.getDrink)
router.post('/search', foodController.getSearch)
// router.use('/search', foodController.Search)

module.exports = router