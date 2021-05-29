const asyncHandler = require("../middleware/async");
const config = require("config");

const CucouinAPI = require("kucoin-node-api");

// @desc      Get All Courses
// @route     GET /
// @access    Public

CucouinAPI.init(config.get("KUKOIN_API"));
exports.kukoinGetCourses = asyncHandler(async (req, res, next) => {
  res.send(await CucouinAPI.getAllTickers());
});
