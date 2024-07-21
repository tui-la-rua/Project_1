const mongoose = require('mongoose')

const News = new mongoose.Schema({
    name : { type: String, required: true },
    description : { type: String, required: true },
})

module.exports = mongoose.model('News', News)