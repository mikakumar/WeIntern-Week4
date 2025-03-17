require('dotenv').config({path: './config/.env'});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');

const jwt = require('jsonwebtoken');

const IndexRoute = require('../routes/index.route');

const app = express();

app.use(cors({credentials: true, origin:'http://localhost:4000'}));
app.use(bodyparser.json())
app.use(express.json());
app.use(cookieparser());


const PORT = process.env.PORT || '5000';
const DB_URL = process.env.DB_URL || '';

mongoose.connect(DB_URL)
    .then(()=>{
        console.log("Connected to DB!");
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    });
    
    app.use('/back/', IndexRoute);


app.listen(PORT, ()=>{
    console.log('Listening on PORT', PORT)
});
