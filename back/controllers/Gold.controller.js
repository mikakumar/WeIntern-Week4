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

const bodySymbol = req.body.symbol;
const bodyCurrency = req.body.currency;
const bodyDate = req.body.date;

var obj;
var url;

if(!bodyDate){
  url = `https://www.goldapi.io/api/${bodySymbol}/${bodyCurrency}`
}

else{
  url = `https://www.goldapi.io/api/${bodySymbol}/${bodyCurrency}/${bodyDate}?`;
}

console.log(bodyCurrency)
const result =await fetch(url, requestOptions)
.then(response => response.json())
.then(result=>
    obj = result
)
.catch(error => console.log('error', error));

console.log(obj);
const date = obj['date'];
 const timestamp = obj['timestamp'];
 const metal = obj['metal'];
 const currency = obj['currency'];
 const exchange = obj['exchange'];
 const price = obj['price'];

 const nugget = await Gold.create({
    date,
    timestamp,
    metal,
    currency,
    exchange,
    price
 });

 console.log(nugget)

}

const GoldReturn = async(req,res)=>{
  const {date, timestamp, metal, currency} = req.body;
  await Gold.findOne({timestamp})
  .then(nugget=>res.json(nugget))
  .catch(err=>res.json(err));
}

module.exports = {GoldFetch, GoldReturn}