const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Resturent");
////on errror needs to done
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose");
});
////on errror needs to done
module.exports = { mongoose, db };
