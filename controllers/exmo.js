const asyncHandler = require("../middleware/async");
const config = require("config");

const exmo = require("exmo-api");

// @desc      Get All Courses
// @route     GET /
// @access    Public

exmo.init_exmo(config.get("EXMO_API"));

exports.exmoGetCourses = asyncHandler((req, res, next) => {
  res.send(exmo.api_query("trades", {}, result => console.log(result)));
});
