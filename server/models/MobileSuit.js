const mongoose = require('mongoose');

const mobileSuit = new mongoose.Schema({
    name: {type: String},
    modelNumber: {type: String},
    pilot: {type: String},
    seriesAppeared: {Array},
    manufacturer: {type: String},
    image: {type: String},
    versions: {type: String}
})

const MobileSuit = mongoose.model('MobileSuit', mobileSuit);

module.exports = {MobileSuit, mobileSuit}