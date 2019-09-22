const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const auth = require('../middleware/auth');
const SaveSearch = require('../models/SaveSearch');
const SaveQuery = require('../models/SaveQuery');
const SaveAllQueries = require('../models/SaveAllQueries');

/**********************************************
 * @desc        Middlewear for Twitter Search
 **********************************************/
router.use('/tweets', require('./search/twitter'));

/**************************************
 * @route       GET api/v1/search
 * @desc        Get all saved searches
 * @access      Private
 *************************************/
router.get('/', auth, async (req, res) => {
  try {
    const searches = await SaveSearch.find({ user: req.user.id }).sort({
      date: -1
    });

    const allQueries = await SaveAllQueries.find({}).sort({
      date: -1
    });
    const queries = await SaveQuery.find({ user: req.user.id }).sort({
      date: -1
    });

    res.status(200).send({
      data: searches,
      queries,
      allQueries
    });
  } catch (error) {
    console.log(
      chalk.white.bgRed(
        ` Error in '/' GET ./routes/search.js: ${error.message} `
      )
    );
    res.status(500).send('Server Error!');
  }
});

/************************************
 * @route       POST api/v1/search
 * @desc        Save a search
 * @access      Private
 *********************************/
router.post('/', auth, async (req, res) => {
  const { createdAt, text, tweetURL, type, twitterUser } = req.body.search;

  try {
    const newSearch = new SaveSearch({
      user: req.user.id,
      createdAt,
      text,
      tweetURL,
      type,
      twitterUser
    });

    const search = await newSearch.save();

    res.json(search);
  } catch (error) {
    console.log(
      chalk.white.bgRed(
        ` Error in '/' POST ./routes/search.js: ${error.message} `
      )
    );
    res.status(500).send('Server Error!');
  }
});

/****************************************
 * @route       PUT api/v1/search/:id
 * @desc        Update a search
 * @access      Private
 ****************************************/
router.put('/:id', (req, res) => {
  res.send({ message: 'This endpoint will update a search query!' });
});

/*****************************************
 * @route       DELETE api/v1/search/:id
 * @desc        Delete a search
 * @access      Private
 *****************************************/
router.delete('/:id', (req, res) => {
  res.send({ message: 'This endpoint will delete a search query!' });
});

module.exports = router;
