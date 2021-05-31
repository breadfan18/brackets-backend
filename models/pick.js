const mongoose = require('mongoose');

const picksSchema = new mongoose.Schema({
    groupStagePicks: {},
    roundOf16Picks: {},
    quartersPicks: {},
    semisPicks: {},
    finalPick: String,
    totalPoints: Number,
    uid: String
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Pick', picksSchema);

