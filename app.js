const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter.js');
const userRouter = require('./routes/userRouter.js');

const app = express();

/*this is for middleware for example in put req ,
express.js while not give the data so you need to use this middleware*/
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use('/api/v1/tours', tourRouter);

app.use('/api/v1/users', userRouter);

module.exports = app;
