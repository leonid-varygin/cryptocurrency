const asyncHandler = require("../middleware/async");
const config = require("config");
const mongoose = require('mongoose')

const Binance = require("node-binance-api");
const binance = new Binance().options(config.get("API_BINANCE"));

// @desc      Get All Courses
// @route     GET /
// @access    Public

exports.binanceGetCourses = asyncHandler(async (req, res, next) => {
  const dataJSON = await binance.futuresPrices();

  const binanceModel = mongoose.model("binance", {
    name: Object,
    value: Object,
    date: Date
  });

  await new binanceModel({
    name: Object.keys(dataJSON),
    value: Object.values(dataJSON),
    date: Date.now()
  })
  
  .save()
  .then(() => console.log(`Данные биржи binance обновлены!`))

  res.send(dataJSON);
});
