const { cronJob, csvJob } = require('../helpers/cronJobs');
const { csvReader } = require('../helpers/csvReader');
const cron = require('node-cron');
const models = require('../models');
const { sequelize } = require('../dbConfig');
const _ = require('underscore')

const reformateData = (result) => {
    result = result.map(i => i.toJSON())
    result = _.groupBy(result,'group')
    let rd = {}
    for(let i in result){
        
        let arr = result[i]
        let obj = {}
        for(let j in result[i]){
            obj[`var${result[i][j]["var"]}`] = result?.[i]?.[j]?.["value"] || 0
        }
        rd[i] = obj
    }
    return rd
}

module.exports = {
    reformateData,
    getPrice: async () => {
        try {
            let result = await models.price.findAll({
                attributes: ['group', 'var','value']
            })
            reformateData(result)
            return {
                map : reformateData(result)
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