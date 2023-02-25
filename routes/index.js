const express = require('express')
const app = express()

const price = require('./price')

app.use('/price',price)

module.exports = app;