
module.exports = function(app) {
    var routes = [
        'Auth',
        'User',
        'Note',
        'UserNote'
    ];
    
    routes.forEach(function(route) {
        require('./api/routes/' + route)(app);
    });
};
