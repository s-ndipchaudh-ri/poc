module.exports = {

    getPrice: async (payloadData) => {
        try {
            return {
                price : [{
                    high : "10"
                }]
            }
        } catch (err) {
            // return "close"
            return {err};

        }
    }
}