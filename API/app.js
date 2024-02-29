require('dotenv').config()

const createError = require('http-errors')
const express = require('express');
const logger = require('morgan')

require('./configs/db.config')

const app = express();

app.use(express.json())
app.use(logger('dev'))

const api = require('./configs/routes.config')
app.use('/v1', api)

app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {

  const data = {
    message: "Route not found"
  }
  res.status(error.status).json(data)

})


const port = process.env.PORT || 3000
app.listen(port, () => 
console.info(`Application running in port ${port}`))
