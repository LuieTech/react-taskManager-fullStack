require('dotenv').config()

const express = require('express');
const logger = require('morgan')

require('./configs/db.config')

const app = express();

app.use(logger('dev'))

const api = require('./configs/routes.config')
app.use('/v1', api)


const port = process.env.PORT || 3000
app.listen(port, () => console.info(`Application running in port ${port}`))
