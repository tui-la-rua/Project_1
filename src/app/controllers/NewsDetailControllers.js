const News = require('../models/News')
const { MongooseToOject } = require('../../util/mongoose')
const { render } = require('node-sass')

class NewsDetailController {

    // [GET] /news/:slug
    show(req, res) {
        News.findOne({ slug: req.params.slug })
            .then(news => {
                res.render('newsDetail', {
                    news: news
                })
            })
            .catch(err => {
                res.status(500).json({ error: 'An error occurred while fetching news' })
            })
    }
}

module.exports = new NewsDetailController()