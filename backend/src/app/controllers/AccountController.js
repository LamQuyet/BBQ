const { insertMany, remove } = require('../models/Account');
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
        Account.find({ PhoneNumber: req.body.PhoneNumber, Password: req.body.Password }, async function (err, docs) {
            console.log(docs)
            console.log(docs[0].Type)
            if (docs.length == 0) {
                await res.send("Sai số điện thoại hoặc mật khẩu")
            }
            else {
                await res.send(docs[0].Type)
            }
        })
    }
    async getAccount(req, res) {
        Account.find({}, function (err, docs) {
            if (docs.length == 0) {
                res.send('no account')
            }
            else {
                res.send(docs)
            }
        })
    }
    async Delete(req, res) {
        console.log(req.body)
        Account.findOneAndRemove({ PhoneNumber: req.body.PhoneNumber }, function (err, docs) {
            if (docs === null) {
                res.send("Error")
            }
            else {
                console.log(docs)
                res.send('done')
            }
        })
    }

    async Update(req, res) {
        console.log(req.body)
        Account.findOneAndUpdate({ PhoneNumber: req.body.phone }, { $set: { Name: req.body.Name, PhoneNumber: req.body.PhoneNumber, Password: req.body.Password, Type: req.body.Type } }, { new: true }, function (err, docs) {
            if (docs == null) {
                res.send("Update Error")
            }
            else {
                console.log(docs)
                res.send('Updated')
            }
        })
    }
}
module.exports = new AccountController