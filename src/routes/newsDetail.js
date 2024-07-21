const express = require('express')
const router = express.Router()
const newsDetailController = require('../app/controllers/NewsDetailControllers')

router.get('/:slug', newsDetailController.show)

module.exports = router