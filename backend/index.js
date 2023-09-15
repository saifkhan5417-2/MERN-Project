const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;
require('dotenv').config();
app.use(express.json());
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

const routes = require('./Route/routes');

app.use('/api', routes)

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})