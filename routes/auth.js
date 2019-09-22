const express = require('express');
const router = express.Router();

/************************************
 * @route       GET api/v1/auth
 * @desc        Get logged in user
 * @access      Private
 *********************************/
router.get('/', (req, res) => {
  res.send('Auth GET response');
});

/************************************
 * @route       POST api/v1/auth
 * @desc        Get login user
 * @access      Public
 *********************************/
router.post('/', (req, res) => {
  res.send('Auth POST response!');
});

module.exports = router;
