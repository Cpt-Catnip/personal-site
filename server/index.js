// module imports
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// constants
const PORT = process.env.PORT || 8080;

// create app
const app = express();
module.exports = app;

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'dist')));

// api routes

// serve index.html
app.use('*', (reqRequest, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Inernal server error.');
});

// listen
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
