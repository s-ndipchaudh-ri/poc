const { cronJob, csvJob } = require('../helpers/cronJobs');
const { csvReader } = require('../helpers/csvReader');
const cron = require('node-cron');



module.exports = {

    getPrice: async () => {
        try {
            let result = await csvReader()
            return {
                result
            }
            
        } catch (error) {
            throw error

        }
    },
    startCron : async () => {
        try {
            
            csvJob.start()

            return {
                msg : "Cron Job Started!"
            }
        } catch (error) {
            throw error
        }
    },
    stopCron : async () => {
        try {
            
            csvJob.stop();
            return {
                msg : "Cron Job Stopped!"
            }
        } catch (error) {
            throw error
        }
    }
}