const express = require('express')

const { exmoGetCourses } = require("../controllers/exmo");
const router = express.Router()

router.route("/").get(exmoGetCourses);

module.exports = router