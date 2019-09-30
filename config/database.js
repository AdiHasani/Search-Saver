const mongoose = require('mongoose');
const config = require('config');
const chalk = require('chalk');
const database = config.get('mongoDbURI');

const connectDB = async () => {
  try {
    await mongoose.connect(database, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log(' Mongoose: Connected to MongoDB! '));
  } catch (error) {
    // console.log(
    //   chalk.white.bgRed(` Error in ./config/database.js: ${error.message} `)
    // );
    process.exit(1);
  }
};

module.exports = connectDB;
