const express = require('express');
const app = express();

const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json())


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
// app.use('/person/:work', personRoutes);

const foodRoutes = require('./routes/foodRoutes');
app.use('/food', foodRoutes);

app.listen(3000, () => {
    console.log('App is listening on PORT 3000.');
})