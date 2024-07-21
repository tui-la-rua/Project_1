const express = require('express')
const router = express.Router()
const homeController = require('../app/controllers/HomeControllers')

router.get('/', homeController.index)
module.exports = router
