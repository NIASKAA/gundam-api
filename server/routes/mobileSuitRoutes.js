const router = require("express").Router();
const {MobileSuit} = require('../models')

router.route('/mobileSuit/:id').post(MobileSuit)