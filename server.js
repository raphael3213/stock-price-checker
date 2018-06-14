// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var request=require('request');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=JERJY9GO78VJY24X";

request(url,function(err,res,body){

console.log(body)

})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
