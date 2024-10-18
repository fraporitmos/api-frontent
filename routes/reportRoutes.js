const express = require('express');
const { getGainMonth } = require('../controllers/report/getGainMonth');

const router = express.Router();

router.get("/report_gain_month", getGainMonth);

module.exports = router;