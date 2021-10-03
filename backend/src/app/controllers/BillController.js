const Bill = require('../models/Bill')

class BillController {
    async Order(req, res) {
        console.log(req.body)
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
}
module.exports = new BillController