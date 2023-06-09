const Hashtag = require("../models/hashtags");

class HashTagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const tag = await Hashtag.findByIdAndRemove(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async findByNames(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      }).select("title" - _id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashTagRepository;
