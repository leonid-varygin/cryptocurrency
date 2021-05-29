const express = require('express')

const { cmcGetCourses } = require("../controllers/cmc");
const router = express.Router()

router.route("/").get(cmcGetCourses);

module.exports = router