const express = require('express');
const mognoose = require('mongoose');
const bodyParser = require('body-parser');

const quizzs = require('./routes/api/quizzs');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

//connect to Mongo 
mognoose.connect('mongodb://127.0.0.1:27017/QuizzDb');

mognoose.connection
    .once('open', () => {
        console.log("MongoDb Is Connected Sucessfully !!!...");
    })
    .on('error', (error) => {
        console.log(`Connection error : ${error}`)
    });

//Use Routes 
app.use('/api/quizzs', quizzs);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port : ${PORT}`));