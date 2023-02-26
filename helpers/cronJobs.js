const { csvReader } = require('./csvReader');
const cron = require('node-cron');
const csvJob = cron.schedule('*/5 * * * * *', () => {
    csvReader()
})

module.exports = {
    csvJob
}