const News = require('../models/News')
const { mutipleMongooseToOject } = require('../../util/mongoose')

class NewsControllers {
    index(req, res) {
        News.find({})
            .then((news) => {
                res.render('news', {
                    news: mutipleMongooseToOject(news),
                })
            })
            .catch((err) => {
                res.status(500).json({ error: 'An error occurred while fetching news' })
            })
    }
}

module.exports = new NewsControllers()