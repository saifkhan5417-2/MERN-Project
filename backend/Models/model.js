const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    author: String,
    date: Date,
    img: String,
    desc: String,
    readMore: String,
})

module.exports = mongoose.model('Data', dataSchema)