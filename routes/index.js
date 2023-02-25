const express = require('express')
const app = express()

const price = require('./price')
console.log("routes")
app.use('/price',price)

module.exports = app;