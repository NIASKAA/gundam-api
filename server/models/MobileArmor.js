const mongoose = require('mongoose');

const mobileArmor = new mongoose.Schema({
    name: {type: String},
    modelNumber: {type: String},
    pilot: {type: String},
    seriesAppeared: {Array},
    manufacturer: {type: String},
    image: {type: String},
    versions: {type: String}
})

const MobileArmor = mongoose.model('MobileArmor', mobileArmor)

module.exports = {MobileArmor, mobileArmor}