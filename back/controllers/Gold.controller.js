const fetch = require('node-fetch');

const Gold = require('../models/Gold');

const GoldFetch = async(req,res) =>{
    var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-16aualsm87kloyk-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var obj;
const result =await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
.then(response => response.json())
.then(result=>
    obj = result
)
.catch(error => console.log('error', error));

const date = obj['date'];
 const timestamp = obj['timestamp'];
 const metal = obj['metal'];
 const currency = obj['currency'];
 const exchange = obj['exchange'];
 const price = obj['price'];

 await Gold.create({
    date,
    timestamp,
    metal,
    currency,
    exchange,
    price
 })

}

module.exports = {GoldFetch}