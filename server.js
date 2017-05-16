
var server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080

var mongodb_database_name = "sampledb";
var mongodb_connection_string = (process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/') + mongodb_database_name;

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Note = require('./api/models/Note');
var NoteRoute = require('./api/routes/Note');

mongoose.Promise = global.Promise;
mongoose.connect(mongodb_connection_string);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

NoteRoute(app);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(server_port, server_ip, function() {
	console.log("Listening on " + server_ip + ", port " + server_port);
});
