const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

date = new Date(); //2017-04-25T06:23:36.510Z
date.toLocaleTimeString();

const Bill = new Schema({
    Account: String,
    Name: String,
    Addres: String,
    PhoneNumber: String,
    Foods: Object,
    TotalPrice: Number,
    Status: { type: Boolean, default: false },
    Time: { type: Date, default: date.toLocaleTimeString() }
});
module.exports = mongoose.model('Bill', Bill);