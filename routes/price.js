const router = require('express').Router();
const sendResponse = require("../helpers/sendResponses");
const controller = require('../controllers')

/*
get price from csv file
*/
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

/*
start cron job to read csv file
*/
router.get("/cronjob/start", async function (req, res) {
	controller.PriceController.startCron(req.body).then((data) => {
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

/*
stop cron job to read csv file
*/
router.get("/cronjob/stop", async function (req, res) {
	controller.PriceController.stopCron(req.body).then((data) => {
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