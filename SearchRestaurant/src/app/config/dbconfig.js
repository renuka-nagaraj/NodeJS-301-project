const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Resturent");
////on errror needs to done
module.exports = mongoose;