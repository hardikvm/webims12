const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/user-routes');
const travelRoute = require('./routes/travel-routes');
const mainRouter = require('./routes/main-routes');

const app = express();

app.use(cors());
app.use(express.json());

// User-related routes
app.use('/api/user', userRouter);

// Travel-related routes (prefix '/api/main')
app.use('/api/main', travelRoute);
app.use('/api/main', mainRouter);
// Connect to MongoDB and start the server

mongoose.connect('mongodb+srv://hardik:Meditab%40123@hackathon.i37y2.mongodb.net/?retryWrites=true&w=majority&appName=hackathon')
    .then(() => app.listen(3000))
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(err);
    });