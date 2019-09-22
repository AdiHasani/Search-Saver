const express = require('express');
const router = express.Router();

/**********************************************
 * @desc        Middlewear for Twitter Search
 **********************************************/
router.use('/tweets', require('./search/twitter'));

/**************************************
 * @route       GET api/v1/search
 * @desc        Get all saved searches
 * @access      Private
 *************************************/
router.get('/', (req, res) => {
  res.send({
    message:
      'This endpoint will get all saved searches, privat and public queries!'
  });
});

/************************************
 * @route       POST api/v1/search
 * @desc        Save a search
 * @access      Private
 *********************************/
router.post('/', (req, res) => {
  res.send({ message: 'This endpoint will save a search!' });
});

/****************************************
 * @route       PUT api/v1/search/:id
 * @desc        Update a search
 * @access      Private
 ****************************************/
router.put('/:id', (req, res) => {
  res.send({ message: 'This endpoint will update a search!' });
});

/*****************************************
 * @route       DELETE api/v1/search/:id
 * @desc        Delete a search
 * @access      Private
 *****************************************/
router.delete('/:id', (req, res) => {
  res.send({ message: 'This endpoint will delete a search!' });
});

module.exports = router;
