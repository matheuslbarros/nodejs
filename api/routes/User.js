'use strict';

module.exports = function(app) {
	var userController = require('../controllers/User');
	
	app.route('/users')
        .get(userController.find)
		.post(userController.create);
};