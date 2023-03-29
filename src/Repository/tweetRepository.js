const Tweet = require("../models/Tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({
          path: "comments",
          populate: {
            path: "comments",
          },
        })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
