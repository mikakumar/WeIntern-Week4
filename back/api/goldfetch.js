
const Gold = require('../models/Gold.js');

const ResultFetch = async(req,res) =>{
    var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-16aualsm87kloyk-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var obj;
await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
.then(response => response.json())
.then(result=>
    obj = result
)
.catch(error => console.log('error', error));

return obj;
}

module.exports = {GoldFetch}