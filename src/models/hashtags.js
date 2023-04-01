const mongoose = require("mongoose");

const hashtagSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // hashtag may kon se tweet belong karti ha
    tweets: [
      {
        // we perform this just like we perform joining in sequelize
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamp: true }
);

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

module.exports = Hashtag;
