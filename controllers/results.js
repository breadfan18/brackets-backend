let Result = require('../models/results');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.body);
    Result.create(req.body, function (err, results) {
        res.status(201).json(results);
    })
}