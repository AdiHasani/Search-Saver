const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

/************************************
 * @route       POST api/v1/users
 * @desc        Register a user
 * @access      Public
 *********************************/
router.post(
  '/',
  [
    check('name', 'Please add name.')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email.').isEmail(),
    check(
      'password',
      'Please enter a password with minimum of 6 characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, email, password } = req.body;
    email = email.toLowerCase();

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          message:
            'An account with that email address already exists. Please login to continue.'
        });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jsonWebTokenSecret'),
        {
          expiresIn: '1h'
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(
        chalk.white.bgRed(` Error in ./routes/users.js: ${error.message} `)
      );
      res.status(500).send('Server Error!');
    }
  }
);

module.exports = router;
