const fs = require('fs');
const csv = require('csv-parser');
const price = require('../models/price');
const models = require('../models');

const csvReader = async (payloadData) => {
    try {
        let stream = fs.createReadStream(`${__dirname}/poc.csv`)
            .pipe(csv())
            let data = [];
            for await (const chunk of stream) {
              data.push(chunk)
            }
            let priceDel = await models.price.destroy({
                where: {},
                truncate: true
              })
              console.log(data)
            let prices = await models.price.bulkCreate(data)
            

            return {
                data
            }

        
    } catch (error) {
        console.log(error)
        return { error };

    }
}

module.exports = {
    csvReader
}