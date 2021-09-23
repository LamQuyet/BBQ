const Food = require('../models/Food')
var searchdata;

class FoodController {

    getSearch(req, res) {
        console.log(req.body);
        searchdata = req.body.search
        console.log(searchdata)
    }

    //Search
    Search(req, res) {
        Food.find({ "Name": { '$regex': searchdata } }, function (err, data) {
            console.log(searchdata)
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