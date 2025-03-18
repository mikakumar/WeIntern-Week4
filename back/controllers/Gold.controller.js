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
 const prev_close_price = obj['prev_close_price'];
 const open_price = obj['open_price'];
 const low_price = obj['low_price'];
 const high_price = obj['high_price'];
 const open_time = obj['open_time'];
 const ch = obj['ch'];
 const chp = obj['chp'];
 const ask = obj['ask'];
 const bid = obj['bid'];
 const price_gram_24k = obj['price_gram_24k'];
 const price_gram_22k = obj['price_gram_22k'];
 const price_gram_21k = obj['price_gram_21k'];
 const price_gram_20k = obj['price_gram_20k'];
 const price_gram_18k = obj['price_gram_18k'];
 const price_gram_16k = obj['price_gram_16k'];
 const price_gram_14k = obj['price_gram_14k'];
 const price_gram_10k = obj['price_gram_10k'];


 const nugget = await Gold.create({
    date,
    timestamp,
    metal,
    currency,
    exchange,
    price,
    prev_close_price,
    open_price,
    low_price,
    high_price,
    open_time,
    ch,
    chp,
    ask,
    bid,
    price_gram_24k,
    price_gram_22k,
    price_gram_21k,
    price_gram_20k,
    price_gram_18k,
    price_gram_16k,
    price_gram_14k,
    price_gram_10k
 });

 

}

const GoldReturn = async(req,res)=>{
  const {timestamp} = req.body;
  await Gold.findOne({timestamp})
  .then(nugget=>res.json(nugget))
  .catch(err=>res.json(err));
}

module.exports = {GoldFetch, GoldReturn}