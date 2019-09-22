const express = require('express');
const router = express.Router();
const config = require('config');
const Twitter = require('twitter');

let twitter = new Twitter({
  consumer_key: config.get('twitterKey'),
  consumer_secret: config.get('twitterSecretKey'),
  access_token_key: config.get('twitterAccessToken'),
  access_token_secret: config.get('twitterAccessTokenSecret')
});

router.get('/', (req, res) => {
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
    (error, tweets, response) => {
      if (!error) {
        res.status(200).send(tweets);
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
