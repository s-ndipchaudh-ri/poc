const router = require('express').Router();
const sendResponse = require("../helpers/sendResponses");
const controller = require('../controllers')
router.get("/", async function (req, res) {
	controller.PriceController.getPrice(req.body).then((data) => {
		sendResponse.sendSuccessMessage("success", data, res);
	}).catch((err) => {
		if (err.isJoi) {
			sendResponse.sendErorMessage(err.details[0].message, {}, res);
		}
		else {
			sendResponse.sendErorMessage(err.message, {}, res);
		}
	});
})

module.exports = router;