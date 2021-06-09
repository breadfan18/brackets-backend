const mongoose = require('mongoose');

const resultsSchema = new mongoose.Schema({
    'Group A': [],
    'Group B': [],
    'Group C': [],
    'Group D': [],
    'Group E': [],
    'Group F': [],
    'Group G': [],
    'Group H': [],
    roundOf16Results: {},
    quartersResults: {},
    semisResults: {},
    finalResult: String,
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Result', resultsSchema);

