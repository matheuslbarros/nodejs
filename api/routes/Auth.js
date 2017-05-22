'use strict';

module.exports = function(app) {
	var authController = require('../controllers/Auth');
	
	app.route('/auth/register')
		.post(authController.register);
	
	app.route('/auth/signin')
		.post(authController.signin);
};