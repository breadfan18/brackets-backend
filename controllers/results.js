let Result = require('../models/results');

module.exports = {
    index,
    create
}

function index(req, res){
    Result.find({}, function (err, results) {
        res.status(200).json(results)    })
}

function create(req, res) {
    console.log(req.body);
    Result.create(req.body, function (err, results) {
        res.status(201).json(results);
    })
}