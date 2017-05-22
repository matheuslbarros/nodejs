'use strict';

module.exports = function(app) {
	var noteController = require('../controllers/Note');
	
	app.route('/api/notes')
		.get(noteController.find)
		.post(noteController.create);
	
	app.route('/api/notes/:id')
		.get(noteController.read)
		.put(noteController.update)
		.delete(noteController.delete);
};