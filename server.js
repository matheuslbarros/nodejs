
var serverIp = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var serverPort = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

var mongoUrl = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/sampledb';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var authenticate = require('./api/middlewares/Authenticate');
var authenticated = require('./api/middlewares/Authenticated');
var routes = require('./routes');

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(authenticate);

app.all('/api/*', authenticated);

app.get('/', function (req, res) {
	res.send('GET request to the homepage');
});

routes(app);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(serverPort, serverIp, function() {
	console.log("Listening on " + serverIp + ", port " + serverPort);
});
