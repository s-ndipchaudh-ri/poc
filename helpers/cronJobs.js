const fs = require('fs');
const csv = require('csv-parser');
const models = require('../models');
const { csvReader } = require('./csvReader');
const cron = require('node-cron');
const csvJob = cron.schedule('*/5 * * * * *', () => {
    csvReader()
    
})

module.exports = {
    csvJob
}