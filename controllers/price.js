const { csvReader } = require('../helpers/csvReader');
const cron = require('node-cron');
const job = cron.schedule('*/5 * * * * *', () => {
    csvReader()
    console.log(new Date());
  });

module.exports = {

    getPrice: async (payloadData) => {
        try {
            let result = await csvReader()
            return {
                result
            }
            
        } catch (error) {
            // return "close"
            throw error

        }
    },
    startCron : async () => {
        try {
            
            await job.start();
            return {
                msg : "Cron Job Started!"
            }
        } catch (error) {
            throw error
        }
    },
    stopCron : async () => {
        try {
            
            await job.stop();
            return {
                msg : "Cron Job Stopped!"
            }
        } catch (error) {
            throw error
        }
    }
}