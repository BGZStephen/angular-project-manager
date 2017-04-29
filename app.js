const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

//connect to db
mongoose.connect(config.database)

// on success
mongoose.connection.on('connected', () => {
  console.log('Connected to database: ' + config.database)
})

// on error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

const app = express()

// user routes
const users = require('./routes/users')
// project routes
const project = require('./routes/project')
// project routes
const counter = require('./routes/counter')

// app port number
const port = 3000

// cors middleware
app.use(cors())

// static folder
// app.use(express.static(path.join(__dirname, 'public')))

// body parser
app.use(bodyParser.json())

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport);

app.use('/users', users);
app.use('/project', project);
app.use('/counter', counter);

// index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint')
})

// all other routes get sent to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// start Server
app.listen(port, () => {
  console.log("Server started on port " + port)
})
