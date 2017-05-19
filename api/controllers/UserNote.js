'use strict';

var mongoose = require('mongoose');
var Note = require('../models/Note');

module.exports.find = function(req, res) {
	Note
		.find({ user: req.params.user })
		.limit(10)
		.exec(function(err, note) {
			if (err) {
				res.send(err);
			} else {
				res.json(note);
			}
		});
};
