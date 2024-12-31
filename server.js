// Import express: for creating server
const express = require('express');
// Express function returns an app object
const app = express();

// Import the database object, exported from db.js
const db = require('./db');

// Body parser used to parse json into objects, and vice versa
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const passport = require('./auth');

// Responsible for logging entries into console
// It's a middleware function: Runs as soon as request is generated (between req and res)
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`)
    next();
}
app.use(logRequest);


app.use(passport.initialize())
const localAuthMiddleware = passport.authenticate('local', {session:false});

app.get('/',localAuthMiddleware, (req, res) => {
    res.send('welcome');
})


// Import routes from routes folder and use them
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const foodRoutes = require('./routes/foodRoutes');
app.use('/food', foodRoutes);

// Let the App listen on a given PORT
app.listen(3000, () => {
    console.log('App is listening on PORT 3000.');
})