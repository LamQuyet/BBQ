const Sale = require('../models/Sale')

class SiteController {
    index(req, res) {
        Sale.find({}, function (err, sale) {
            if (!err) {
                res.json(sale)
            } else {
                res.status(500).json({ error: "FAIL" })
            }
        })
    }
}
module.exports = new SiteController