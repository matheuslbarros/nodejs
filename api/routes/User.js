'use strict';

module.exports = function(app) {
	var userController = require('../controllers/User');
	
	app.route('/api/users')
        .get(userController.find)
		.post(userController.create);
};