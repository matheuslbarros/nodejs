'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of the note'
  },
  description: {
    type: String,
    Required: 'Kindly enter the description of the note'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notes', NoteSchema);