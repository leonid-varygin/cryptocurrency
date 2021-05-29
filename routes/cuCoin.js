const express = require('express')

const { kukoinGetCourses } = require("../controllers/kuKoin");
const router = express.Router()

router.route("/").get(kukoinGetCourses);

module.exports = router