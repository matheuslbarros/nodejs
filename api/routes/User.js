'use strict';

module.exports = function(app) {
	var userController = require('../controllers/User');
	
	app.route('/users')
		.post(userController.create);
};