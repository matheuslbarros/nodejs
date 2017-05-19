'use strict';

module.exports = function(app) {
	var userNoteController = require('../controllers/UserNote');
	
	app.route('/users/:user/notes')
		.get(userNoteController.find);
};