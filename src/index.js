const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path')
const app = express()
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const route = require('./routes')

const db = require('./config/db/index')






// connect to db
db.connect();

// cấu hình file tĩnh
app.use(express.static(path.join(__dirname, 'public')))


route(app);

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources', 'views'))
app.use(express.static('public')) 




app.use(morgan('dev'))

app.listen(3000)