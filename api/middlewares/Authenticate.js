
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    req.user = undefined;
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.split(' ');
        if (authorization[0] === "JWT") {
            jwt.verify(authorization[1], "api", function(err, decode) {
                req.user = decode;
                next();
            });
            return;
        }
    }
    next();
};
