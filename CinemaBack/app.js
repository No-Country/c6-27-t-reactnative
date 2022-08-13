const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const path = require('path')
const userRoutes = require('./routes/users')
const filmRoutes = require('./routes/films')

// dotenv is a module that loads environment variables from a .env file into process.env
require('dotenv').config({ path: '.env' })
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
const usersRoutes = require('./routes/users.js')
const filmsRoutes = require('./routes/films.js')
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/films', filmsRoutes)
