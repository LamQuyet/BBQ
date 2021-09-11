const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Sale = new Schema({
    _id: ObjectId,
    Name: String,
    Image: String,
    Sale: String,
    OldCost: String,
    NewCost: String
});

module.exports = mongoose.model('Sale', Sale);