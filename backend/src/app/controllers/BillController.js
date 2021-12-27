const Bill = require('../models/Bill')

class BillController {
    async Order(req, res) {
        var bill = new Bill(req.body)
        bill.save(function (err) {
            if (!err) {
                res.send("Odered")
            }
            else {
                res.send(err)
            }
        })
    }

    getBill(req, res) {
        Bill.find({ Status: false }, function (err, data) {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }

    History(req, res) {
        Bill.find({ Status: true }, function (err, data) {
            if (!err) {
                res.json(data)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }
}
module.exports = new BillController