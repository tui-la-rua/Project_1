const newsRouter = require('./news')
const homeRouter = require('./home')
const newsDetailRouter = require('./newsDetail')
function route(app) {
    // News route
    app.use('/news', newsRouter);
    // Home route
    app.use('/home', homeRouter);
    // News detail route
    app.use('/newsdetail', newsDetailRouter);
}

module.exports = route