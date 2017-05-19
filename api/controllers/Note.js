'use strict';

var mongoose = require('mongoose');
var Note = require('../models/Note');

module.exports.find = function(req, res) {
	Note
		.find({})
		.populate("user")
		.limit(10)
		.exec(function(err, note) {
			if (err) {
				res.send(err);
			} else {
				res.json(note);
			}
		});
};

module.exports.create = function(req, res) {
	var note = new Note(req.body);
	note.save(function(err, note) {
		if (err) {
			res.send(err);
		} else {
			res.json(note);
		}
	});
};

module.exports.read = function(req, res) {
	Note
		.findOne({ _id: req.params.id })
		.populate("user")
		.exec(function(err, note) {
			if (err) {
				res.send(err);
			} else {
				res.json(note);
			}
        });
};

module.exports.update = function(req, res) {
	Note.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, note) {
		if (err) {
			res.send(err);
		} else {
			res.json(note);
		}
	});
};

module.exports.delete = function(req, res) {
	Note.remove({
		_id: req.params.id
	}, function(err, note) {
		if (err) {
			res.send(err);
		} else {
			res.json({ message: 'Note successfully deleted' });
		}
	});
};
