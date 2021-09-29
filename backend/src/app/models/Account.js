const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Account = new Schema({
    Name: String,
    PhoneNumber: String,
    Password: String,
});

module.exports = mongoose.model('Account', Account);