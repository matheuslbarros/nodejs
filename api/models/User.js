'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {
		type: String,
		Required: 'Kindly enter the email of the user'
	},
	password: {
		type: String,
		Required: 'Kindly enter the password of the user'
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);