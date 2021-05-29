const express = require('express')

const { binanceGetCourses } = require("../controllers/binance");
const router = express.Router()

router.route("/").get(binanceGetCourses);

module.exports = router