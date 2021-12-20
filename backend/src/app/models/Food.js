const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Food = new Schema({
    Name: String,
    Cost: Number,
    Category: String,
    Image: String,
});

module.exports = mongoose.model('Food', Food);