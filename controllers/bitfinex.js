const asyncHandler = require("../middleware/async");
const config = require("config");

const Poloniex = require("poloniex-api-node");
const poloniex = new Poloniex(config.get("POLONIEX_API"));

// @desc      Get All Courses
// @route     GET /
// @access    Public


exports.poloniexGetCourses = asyncHandler(async (req, res, next) => {
  res.send(await poloniex.returnTicker());
});
