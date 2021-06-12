let Pick = require('../models/pick');

module.exports = {
    indexUser,
    indexAll,
    create,
    update
}

function indexUser(req, res) {
    Pick.find({uid: req.query.uid}, function (err, picks) {
        res.status(200).json(picks);
    })
}

function indexAll(req, res) {
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

function update(req, res) {
    console.log(req.body)
    Pick.findByIdAndUpdate(req.params.id, req.body, function (err, pick) {
       
        indexUser(req, res);
    })
}