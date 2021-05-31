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

const group = {
    'A': {
        1: 'England',
        2: 'Spain',
        3: 'France',
        4: 'Portugal'
    },
    'B': {
        1: 'England',
        2: 'Spain',
        3: 'France',
        4: 'Portugal'
    },
    'C': {
        1: 'England',
        2: 'Spain',
        3: 'France',
        4: 'Portugal'
    },
    'D': {
        1: 'England',
        2: 'Spain',
        3: 'France',
        4: 'Portugal'
    },

}