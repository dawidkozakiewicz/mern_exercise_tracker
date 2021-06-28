const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    descripion: { type: String, required: true },
    duration: { type: Number, required: true },
    date: {}
}, {
    timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;