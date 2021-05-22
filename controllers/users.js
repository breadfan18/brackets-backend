let User = require('../models/user');

module.exports = {
    index,
    create
}

function index(req, res) {
    User.find({}, function (err, users) {
        res.status(200).json(users);
    })
}

function create(req, res) {
    User.create(req.body, function (err, user) {
        res.status(201).json(user)
    })
}
