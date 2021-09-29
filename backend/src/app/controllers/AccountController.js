const { insertMany } = require('../models/Account');
const Account = require('../models/Account')

class AccountController {
    async Register(req, res) {
        console.log(req.body);
        var account = new Account(req.body)
        Account.find({ PhoneNumber: req.body.PhoneNumber }, function (err, docs) {
            if (docs.length) {
                res.send("Số điện thoại đã được dùng")
            }
            else {
                account.save(function (err) {
                    if (!err) {
                        res.send('Đăng kí thành công')
                    }
                    else {
                        res.send(err)
                    }
                })
            }
        })
    }
    async Login(req, res) {
        console.log(req.body)
        Account.find({ PhoneNumber: req.body.PhoneNumber, Password: req.body.Password }, function (err, docs) {
            console.log(docs)
            if (docs.length == 0) {
                res.send("Sai số điện thoại hoặc mật khẩu")
            }
        })
    }
}
module.exports = new AccountController