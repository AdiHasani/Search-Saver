const express = require('express');
const router = express.Router();
const config = require('config');
const Twitter = require('twitter');
const auth = require('../../middleware/auth');
const chalk = require('chalk');
const SaveQuery = require('../../models/SaveQuery');
const SaveAllQueries = require('../../models/SaveAllQueries');

let twitter = new Twitter({
  consumer_key: config.get('twitterKey'),
  consumer_secret: config.get('twitterSecretKey'),
  access_token_key: config.get('twitterAccessToken'),
  access_token_secret: config.get('twitterAccessTokenSecret')
});

router.get('/', auth, (req, res) => {
  /**************************************************************************
   * @route       GET api/v1/search/tweets
   * @desc        Search Tweets in twitter API and Saving the search query
   *              for the user and in a global search terms table
   * @access      Private
   **************************************************************************/

  const { q, result_type, count } = req.body.query;

  twitter.get(
    'search/tweets',
    { q, result_type, count },
    async (error, tweets, response) => {
      if (!error) {
        let tweetsRes = tweets.statuses.reduce((acc, tweet) => {
          let newData = {};

          newData.createdAt = tweet.created_at;
          newData.text = tweet.text;
          newData.tweetURL = tweet.entities.urls ? tweet.entities.urls : '';
          newData.type = tweet.metadata.result_type;
          newData.user = tweet.user;

          return [...acc, newData];
        }, []);

        const newPrivateQuerry = new SaveQuery({
          user: req.user.id,
          query: { q, result_type, count }
        });

        const newPublicQuerry = new SaveAllQueries({
          query: { q, result_type, count }
        });

        await newPrivateQuerry.save();
        await newPublicQuerry.save();

        res.status(200).send({
          data: tweetsRes
        });
      } else {
        console.log(
          chalk.white.bgRed(
            ` Error in ./routes/twitter.js: ${error[0].message} `
          )
        );
        res.status(500).send('Server Error!');
      }
    }
  );
});

module.exports = router;
