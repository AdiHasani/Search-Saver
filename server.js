const express = require('express');
const chalk = require('chalk');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Search Saver is taking shape!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    chalk.black.bgBlackBright(
      ` Welcome to search APP which process runs on port:`
    ),
    chalk.black.bgGreen(` ${PORT} `)
  )
);
