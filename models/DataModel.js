const mongoose = require("mongoose");
const { Schema } = mongoose;

const currencySchema = new Schema({
  title: String,
  currency: String,
  dateUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("currencySchema", currencySchema);
