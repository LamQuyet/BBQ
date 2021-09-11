const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Food = new Schema({
    _id: ObjectId,
    Name: String,
    Cost: String,
    Category: String,
    Image: String,
});

module.exports = mongoose.model('Food', Food);