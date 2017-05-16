
var server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Note = require('./api/models/Note');
var NoteRoute = require('./api/routes/Note');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sampledb');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

NoteRoute(app);

app.listen(server_port, server_ip, function() {
	console.log("Listening on " + server_ip + ", port " + server_port);
});
