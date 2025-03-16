require('dotenv').config({path: './config/.env'});

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || '5000';
const DB_URL = process.env.DB_URL || '';

mongoose.connect(DB_URL, {
    autoIndex: true
});

app.listen(PORT, ()=>{
    console.log('Listening on PORT', PORT)
});
