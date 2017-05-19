'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var NoteSchema = new Schema({
	user: { type: ObjectId, ref: 'User' },
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

module.exports = mongoose.model('Note', NoteSchema);