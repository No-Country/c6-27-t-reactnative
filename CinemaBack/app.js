const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const cors = require("cors")
const path = require('path')
const usersRoutes = require('./routes/users')
const filmsRoutes = require('./routes/films')

// dotenv is a module that loads environment variables from a .env file into process.env
require('dotenv').config({ path: '.env' })
const domainsFromEnv = process.env.CORS_DOMAINS || ""
const whitelist = domainsFromEnv.split(",").map(item => item.trim())
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

// PORT
const PORT = process.env.PORT || 3000

// Middleware
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

// bodyParser.json is a middleware that parses the body of incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Start server in process.env.PORT or 3000
app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT)
})

// Routes
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/films', filmsRoutes)

