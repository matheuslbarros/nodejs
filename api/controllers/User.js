'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.find = function(req, res) {
	User
		.find({})
		.limit(10)
		.exec(function(err, note) {
			if (err) {
				res.send(err);
			} else {
				res.json(note);
			}
		});
};

exports.create = function(req, res) {
	var user = new User(req.body);
	user.save(function(err, user) {
		if (err) {
			res.send(err);
		} else {
			res.json(user);
		}
	});
};
