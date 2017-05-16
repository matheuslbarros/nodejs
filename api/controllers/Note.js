'use strict';

var mongoose = require('mongoose');
var Note = mongoose.model('Notes');

exports.find = function(req, res) {
  Note.find({}, function(err, Note) {
    if (err)
      res.send(err);
    res.json(Note);
  });
};

exports.create = function(req, res) {
  var note = new Note(req.body);
  note.save(function(err, Note) {
    if (err)
      res.send(err);
    res.json(Note);
  });
};

exports.read = function(req, res) {
  Note.findById(req.params.id, function(err, Note) {
    if (err)
      res.send(err);
    res.json(Note);
  });
};

exports.update = function(req, res) {
  Note.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, Note) {
    if (err)
      res.send(err);
    res.json(Note);
  });
};

exports.delete = function(req, res) {
  Note.remove({
    _id: req.params.id
  }, function(err, Note) {
    if (err)
      res.send(err);
    res.json({ message: 'Note successfully deleted' });
  });
};
