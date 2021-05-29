const express = require('express')

const { poloniexGetCourses } = require("../controllers/poloniex");
const router = express.Router()

router.route("/").get(poloniexGetCourses);

module.exports = router