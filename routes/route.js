const express = require("express")
const route = express.Router()
const route_add_provider = require('../routes/add_provider')
route.post('/add_provider',route_add_provider)
module.exports = route