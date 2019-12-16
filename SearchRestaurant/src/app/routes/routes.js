const express = require('express');
const validate = require('express-validation')
const restaurent = require('../brand/restaurent');
const getAllRestaturent = require('../brand/getAllRestaurent');
const restaurentModel = require('../model/restaurant');

const validation = require('../validation/restaurent');
const router = express.Router();

// router.post('/restaurent' , validate(validation),restaurent);
router.post('/api/restaurent' , restaurent);
router.get("/api/v1", getAllRestaturent);

// router.get("/",);

module.exports = router;