const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`)
    next()
})


const api = require('./route/routes')
app.use('/url/', api)



app.listen(5000, () => {
    console.log("Server is running at localhost:5000")
})