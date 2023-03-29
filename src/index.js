const express = require("express");
const Connect = require("./config/database");
const Tweet = require("./models/Tweet");

const app = express();

const port = 3000;
app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
  await Connect();
  const tweet = await Tweet.create({
    content: "This is Content 2",
    userEmail: "user@gmail.com",
  });
  console.log("MongoDb Connected");
});
