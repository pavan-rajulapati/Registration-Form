const express = require('express')
const handleSignup = require('../controlers/user.controler')

const routes = express.Router()
routes.post('/signup',handleSignup)

module.exports = routes