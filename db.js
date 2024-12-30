const mongoose = require('mongoose');
// const mongooseURL = 'mongodb://127.0.0.1:27017/myFunDB';
const mongooseURL = 'mongodb+srv://devanshbcode:devCodesEpic87@cluster0.4ws4d.mongodb.net/';

mongoose.connect(mongooseURL);

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


module.exports = db;