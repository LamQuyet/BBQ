const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Bill = new Schema({
    Account: String,
    Name: String,
    Addres: String,
    PhoneNumber: String,
    Foods: Object,
    TotalPrice: Number,
    Status: { type: Boolean, default: false },
    Time: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Bill', Bill);