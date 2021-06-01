let Pick = require('../models/pick');

module.exports = {
    index,
    create
}

function index(req, res) {
    Pick.find({}, function (err, picks) {
        res.status(200).json(picks);
    })
}

function create(req, res) {
    console.log(req.body);
    Pick.create(req.body, function (err, picks) {
        res.status(201).json(picks)
    })
}
