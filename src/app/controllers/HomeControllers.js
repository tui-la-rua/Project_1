const Home = require('../models/Home')
const { mutipleMongooseToOject } = require('../../util/mongoose')

class HomeController {

    // [GET] /home
    index(req, res) {
        Home.find({})
            .then((home) => {
                res.render('home', {
                    home: mutipleMongooseToOject(home),
                })
            })
            .catch((err) => {
                res.status(500).json({ error: 'An error occurred while fetching home' })
            })
    }
}

module.exports = new HomeController()