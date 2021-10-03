const Food = require('../models/Food')
var searchdata;

class FoodController {

    //POST search
    getSearch(req, res) {
        console.log(req.body);
        // searchdata = req.body.search
        Food.find({ "Name": { '$regex': req.body.search } }, function (err, data) {
            console.log(req.body.search)
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