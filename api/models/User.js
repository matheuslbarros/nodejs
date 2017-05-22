'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({
	email: {
		type: String,
		required: 'Kindly enter the email of the user'
	},
	password: {
		type: String,
		required: 'Kindly enter the password of the user'
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

UserSchema.methods.hashPassword = function(password) {
    if (password) {
        this.password = bcrypt.hashSync(password, 10);
    }
};

UserSchema.methods.comparePassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);