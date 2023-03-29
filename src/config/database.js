const mongoose = require("mongoose");

const Connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1/twitter_Dev");
};

module.exports = Connect;
