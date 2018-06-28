'use strict';

// Get dependencies
const express       = require('express');
const path          = require('path');
const http          = require('http');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

// Get config
const config = require('./config');

// Initialize database
mongoose.connect(config.dbURI);

// Get API routes
// const lab = require('./server/routes/lab.route');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/lab-reservation-system')));

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
