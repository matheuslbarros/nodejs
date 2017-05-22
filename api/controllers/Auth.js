'use strict';

var User = require('../models/User');
var jwt = require('jsonwebtoken');

exports.register = function(req, res) {
    var user = new User(req.body);
    user.hashPassword(req.body.password);
    user.save(function (err, user) {
        if (err) {
            res.send(err);
        } else {
            user.password = undefined;
            res.json(user);
        }
    });
};

exports.signin = function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            if (user) {
                if (user.comparePassword(req.body.password)) {
                    res.json({token: jwt.sign({email: user.email, _id: user._id}, 'api')});
                } else {
                    res.status(401).json({message: 'Authentication failed. Wrong password.'});
                }
            } else {
                res.status(401).json({message: 'Authentication failed. User not found.'});
            }
        }
    });
};
