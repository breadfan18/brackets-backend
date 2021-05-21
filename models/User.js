const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    photoURL: String,
    googleID: String
},
    {
        timestamps: true
    })