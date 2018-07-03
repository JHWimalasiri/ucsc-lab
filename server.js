'use strict';

// Get dependencies
const express       = require('express');
const path          = require('path');
const http          = require('http');
const bodyParser    = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose      = require('mongoose');

// Get config
const config = require('./config');

// Initialize database
mongoose.connect(config.dbURI);

//On connection
mongoose.connection.on('connected', () =>{
  console.log('connected to database '+config.dbURI);
});

//On error
mongoose.connection.on('error', (err) =>{
  console.log('database error '+err);
});


// Get API routes
// const lab = require('./server/routes/lab.route');

const app = express();

const users = require('./routes/users');
var labRoute = require('./routes/labRoute.js');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// CORS Middleware
app.use(cors());


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/ucsc-lab')));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport);

app.use('/users', users);
// app.use('/labs', labs);
app.use('/labs',labRoute)

// Set lab routes
// app.use('/lab', lab);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ucsc-lab/index.html'));
});

// Get port from environment and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log(`Server running on localhost:${port}`));
