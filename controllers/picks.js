let Pick = require('../models/pick');

module.exports = {
    index,
    create,
    update
}

function index(req, res) {
    Pick.find({uid: req.query.uid}, function (err, picks) {
        res.status(200).json(picks);
    })
}

function create(req, res) {
    console.log(req.body);
    Pick.create(req.body, function (err, picks) {
        res.status(201).json(picks)
    })
}

function update(req, res) {
    Pick.findByIdAndUpdate(req.params.id, req.body, function (err, pick) {
        // req.query.uid = pick.uid;
        index(req, res);
    })
}