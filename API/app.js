require('dotenv').config()
const mongoose = require('mongoose')
const createError = require('http-errors')
const express = require('express');
const logger = require('morgan')

require('./configs/db.config')

const app = express();

app.use(express.json())
app.use(logger('dev'))

const api = require('./configs/routes.config');
const { create } = require('./models/task-group.models');
app.use('/v1', api)

// app.use((req, res, next) => next(createError(404, 'Route not found')));

// app.use((req, res, next) => next(createError(404, { errors: { email: "Invalid email" }})));

app.use((req, res, next) => next(createError(401, { 
  
  message: "Invalid Credentials",
  errors: {
    password: "Invalid username or password"
  },

})));


app.use((error, req, res, next) => {
  if(error instanceof mongoose.mongoose.Error.CastError && error.message.includes('_id')){
    error = createError(404, "Resource not found")
  }
    else  if(error instanceof mongoose.Error.ValidationError){
    error = createError(400, error)
  } else if (!error.status){
    error = createError(500, error)
  }
  // error = error.status ? error : createError(500, error)
  console.error("Este es el errror:" , error)

  let errors;
  if(error.errors){
    errors = Object.keys(error.errors) // ["name"]
      .reduce((errors, errorKey) => {
        errors[errorKey] = error.errors[errorKey].message || error.errors[errorKey]
        return errors;

      }, {})
  }


  const data = {
    message: error.message,    
    errors
  }

  res.status(error.status).json(data)

})


const port = process.env.PORT || 3000
app.listen(port, () => 
console.info(`Application running in port ${port}`))
