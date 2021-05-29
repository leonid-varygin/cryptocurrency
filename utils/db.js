const mongoose = require("mongoose");
mongoose.connect("mongodb://192.168.1.173:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
