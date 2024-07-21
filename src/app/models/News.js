const mongoose = require('mongoose')

const News = new mongoose.Schema({
    name : { type: String, required: true },
    description : { type: String, required: true },
    slug: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('News', News)