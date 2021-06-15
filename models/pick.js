const mongoose = require('mongoose');

const picksSchema = new mongoose.Schema({
    'Group A': [],
    'Group B': [],
    'Group C': [],
    'Group D': [],
    'Group E': [],
    'Group F': [],
    'Group G': [],
    'Group H': [],
    roundOf16Picks: {},
    quartersPicks: {},
    semisPicks: {},
    finalPick: String,
    totalPoints: Number,
    uid: String,
    username: String,
    photo: String
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Pick', picksSchema);

