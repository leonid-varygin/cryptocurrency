const asyncHandler = require("../middleware/async");
const config = require("config");
const mongoose = require("mongoose");

const CoinMarketCap = require("coinmarketcap-api");

// @desc      Get All Courses CMC
// @route     GET /
// @access    Public

const client = new CoinMarketCap(config.get("API_CMC"));

exports.cmcGetCourses = asyncHandler(async (req, res, next) => {
  const { data } = await client.getTickers();

  const cmcModel = mongoose.model("cmc", {
    name: Object,
    symbol: Array,
    price: Object,
    date: Date,
  });

  await new cmcModel({
    name: data.map((el) => el.name),
    symbol: data.map((el) => el.symbol),
    price: data.map((el) => el.quote.USD.price),
    date: Date.now(),
  })
    .save()
    .then(() => console.log(`Данные биржи cmc обновлены!`));

  res.send(data);

});
