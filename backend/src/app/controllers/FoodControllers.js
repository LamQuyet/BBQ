const Food = require('../models/Food')

class FoodController {
    //GET All
    getAll(req, res) {
        Food.find({}, function (err, data) {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }

    //GET BBQ
    getBBQ(req, res) {
        Food.find({ Category: 'BBQ' }, function (err, data) {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }

    //GET Hotpot
    getHotpot(req, res) {
        Food.find({ Category: 'Hotpot' }, function (err, data) {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }

    //GET Drink
    getDrink(req, res) {
        Food.find({ Category: 'Drink' }, function (err, data) {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }
}
module.exports = new FoodController