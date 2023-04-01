import { TweetRepository } from "../Repository/index";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g);
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    // todo create hastag and add here
    return tweet;
  }
}

module.exports = TweetService;

/*
   mostly people write like this 
   this is my #first #content i am really excited
   check one by one word and etract tweet 
   we use Regex for Extracting the text 
   /#[a-z0-9_]+/g this is regex for extracting the Text  
*/
