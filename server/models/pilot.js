const mongoose = require('mongoose');

const pilot = new mongoose.Schema({
    name: {type: String},
    aliases: {type: Array},
    status: {type: String},
    Genetic: {type: String},
    gender: {type: String},
    mechaPiloted: {type: Array},
    affiliation: {type: Array},
})

const Pilot = mongoose.model('Pilot', pilot)

module.exports = {Pilot, pilot}