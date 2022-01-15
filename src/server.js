const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const log = require('./log/log')
const swaggerUI = require('swagger-ui-express')
const docs = require('./swagger.json')

const app = express()

const dbstr = 'mongodb://127.0.0.1/urlshortner'
mongoose.connect(
    dbstr,
    { useUnifiedTopology: true, useNewUrlParser: true }
)

const db = mongoose.connection

db.once('open', () => log.info('connected to the database'))

db.on('error', () => log.error('MongoDB connection error:'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use((req, res, next) => {
    log.info(`Request_Endpoint: ${req.method} ${req.url}`)
    next()
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))


const api = require('./route/routes')

const apia = require('./route/routes1')
app.use('/', apia)
app.use('/url/', api)


app.listen(5000, () => {
    log.info("Server is running at localhost:5000/api-docs")
})