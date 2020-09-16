// module imports
const express = require('express');
import { NextFunction } from 'express';
const morgan = require('morgan');
const path = require('path');
const HttpError = require('./HttpError');

// constants
const PORT: number | string = process.env.PORT || 8080;

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
app.use('*', (req: Express.Request, res: any) => {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

// error handling middleware
app.use(
  (
    err: typeof HttpError,
    req: Express.Request,
    res: any,
    next: NextFunction
  ) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Inernal server error.');
  }
);

// listen
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
