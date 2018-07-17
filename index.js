const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./src/routes');

//enable cors request
app.use(cors())

//json body parser
app.use(bodyparser.json())

app.use('/api', route);

// Base url
app.get('/', (req, res) => {
    res.send('Hello world');
});

//Connect to Mongo
mongoose.connect('mongodb://localhost:27017/contacts')

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo db @ 27017')
})

mongoose.connection.on('error', (err) => {
    if(err) {
        console.log('Error in mongo connection @ 27017')
    }
})

const port = process.env.port || 3000;
app.listen(port, () => console.log(`App is listening on port ${port}`));
