const fs = require('fs');
const csv = require('csv-parser');

const csvReader = async (payloadData) => {
    try {
        let stream = fs.createReadStream(`${__dirname}/poc.csv`)
            .pipe(csv())
            let data = [];
            for await (const chunk of stream) {
              data.push(chunk)
            }
          console.log(data)
            
            return {
                data
            }

        
    } catch (error) {
        return { err };

    }
}

module.exports = {
    csvReader
}