var express = require('express')
var router = express.Router()
const siteCOntroller = require('../src/app/controllers/SiteController')

router.use('/getsit', siteCOntroller.index)

module.exports = router