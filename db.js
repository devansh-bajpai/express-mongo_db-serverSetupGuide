// Importing mongoose
const mongoose = require('mongoose');
// Configure dot env
require('dotenv').config();

// Setup a mongooseURL
const mongooseURL = process.env.mongooseURL_local;
// const mongooseURL = process.env.mongooseURL;

// Connect to the URL
mongoose.connect(mongooseURL);

// Create database object: Responsible for basically everything
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connection established with database.');
})

db.on('disconnected', () => {
    console.log('Disconnected from database.');
})

db.on('error', (err) => {
    console.log('error received: ', err);
})


// Export the database object
module.exports = db;