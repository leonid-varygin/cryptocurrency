const express = require("express");
const app = express();
const config = require("config");
const port = config.get("serverPort");

const mongoose = require("mongoose");
mongoose.connect(config.get("dbUrl"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routesBinance = require("./routes/binance");
const routesCmc = require("./routes/cmc");
const routesCucoin = require("./routes/cuCoin");
const routesExmo = require("./routes/exmo");
const routesPoloniex = require("./routes/poloniex");






app.use("/binance", routesBinance);
app.use("/cmc", routesCmc);
app.use("/cucoin", routesCucoin);
app.use("/exmo", routesExmo);
app.use("/poloniex", routesPoloniex);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
