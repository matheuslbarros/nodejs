'use strict';

module.exports = function(app) {
	var noteController = require('../controllers/Note');
	
	app.route('/notes')
		.get(noteController.find)
		.post(noteController.create);
	
	app.route('/notes/:id')
		.get(noteController.read)
		.put(noteController.update)
		.delete(noteController.delete);
};