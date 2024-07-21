const News = require('../models/News')
const { mutipleMongooseToOject } = require('../../util/mongoose')
class NewsController {
    // [GET] /news
    index(req, res) {
        News.find({})
            .then((news) => {
                res.render('news', {
                    news: mutipleMongooseToOject(news),
                });
            })
            .catch((err) => {
                res.status(500).json({ error: 'An error occurred while fetching news' });
            });
    }
    // ... rest of the code
}


module.exports = new NewsController()