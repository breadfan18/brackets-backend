let User = require('../models/user');

module.exports = {
    index
}

function index(req, res) {
    User.find({}, function (err, users) {
        res.status(200).json(users);
    })
}
