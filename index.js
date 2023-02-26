const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

var cookieParser = require("cookie-parser");
// declare a new express app
const app = express()
require("./dbConfig").connectDB();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())
app.options('/*',cors())
app.use(function (req, res, next) {
	//Enabling CORS
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
	next();
});


// import all routes
const Routes = require('./routes');
const models = require('./models');
const { reformateData } = require('./controllers/price');
app.use(Routes)

wss.on('connection', async  (ws) => {
  console.log('client connected');

  setInterval(async() => {
    const csvData = await models.price.findAll({
      attributes : ['group','var','value']
    });
    let newData = await reformateData(csvData)
    ws.send(JSON.stringify(newData));

  }, 10000);
})

app.listen(5003, function() {
    console.log("App started")
});