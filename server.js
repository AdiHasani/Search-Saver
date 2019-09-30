const express = require('express');
const path = require('path');
const chalk = require('chalk');
const connectDB = require('./config/database');

const app = express();

connectDB();

// Initializing Middleware
app.use(express.json({ extended: false }));

// API routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/search', require('./routes/search'));
app.use('/api/v1/auth', require('./routes/auth'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('react-app/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'react-app', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(` Welcome to search APP which process runs on port: ${PORT} `)
);
