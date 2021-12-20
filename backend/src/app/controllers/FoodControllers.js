const Food = require('../models/Food')

class FoodController {

    //POST search
    getSearch(req, res) {
        console.log(req.body);
        // searchdata = req.body.search
        Food.find({ "Name": { '$regex': req.body.search } }, function (err, data) {
            console.log(req.body.search)
            if (!err) {
                res.json(data)
                // res.send(data)
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

    //GET all foods
    getAll(req, res) {
        Food.find({}, function (err, data) {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }

    //Add new food
    NewFood(req, res) {
        const food = new Food(req.body)
        food.save(function (docs, err) {
            if (err) {
                res.send('added')
            }
            else {
                res.send('error')
            }
        })
    }
}
module.exports = new FoodController