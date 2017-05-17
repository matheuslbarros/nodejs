
var serverIp = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var serverPort = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

var mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL;

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
	var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
		mongoHost        = process.env[mongoServiceName + '_SERVICE_HOST'],
		mongoPort        = process.env[mongoServiceName + '_SERVICE_PORT'],
		mongoDatabase    = process.env[mongoServiceName + '_DATABASE'],
		mongoPassword    = process.env[mongoServiceName + '_PASSWORD']
		mongoUser        = process.env[mongoServiceName + '_USER'];
	
	if (mongoHost && mongoPort && mongoDatabase) {
		mongoURL = 'mongodb://';
		if (mongoUser && mongoPassword) {
			mongoURL += mongoUser + ':' + mongoPassword + '@';
		}
		mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
	}
}

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Note = require('./api/models/Note');
var NoteRoute = require('./api/routes/Note');

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

NoteRoute(app);

app.get('/', function (req, res) {
	res.send('GET request to the homepage');
});

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(serverPort, serverIp, function() {
	console.log("Listening on " + serverIp + ", port " + serverPort);
});

module.exports = app;