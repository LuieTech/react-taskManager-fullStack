const mongoose = require('mongoose')

const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/task-manager-fullstack';

mongoose.connect(mongodbUri)
  .then(() => console.info(`Successfully connected to database ${mongodbUri}`))
  .catch((error) => console.error(`An error ocurred trying to connect to database ${mongodbUri}`))