// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongoose=require('mongoose');

var request=require('request');
var bp=require('body-parser');
var stocks=require('./models/stock')
app.use(bp.json())
app.use(bp.urlencoded({extended:false}))

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
mongoose.connect(process.env.MONGO_URI,function(err){

if(err){
console.log(err)
}
  console.log("mongo connected");
  
})
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="


var url1="&apikey=JERJY9GO78VJY24X";

request(url,function(err,res,body){

//console.log(body)

})


app.post('/stock',function(req,res,next){
console.log("hello")
console.log(req.body);
  var add=req.header('x-forwarded-for').split(',')[0];
  console.log(add)
var stname=req.body.stocker;
  var like=req.body.like;
  var corr=true;
  var url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="


var url1="&apikey=JERJY9GO78VJY24X";
var urlx=url+stname+url1;
request(urlx,function(err,resi,body){
  
  var meta=JSON.parse(body);
  if(meta['Error Message']!=undefined){
  
  res.json({Error:"Stock doesnt exist"});
    
  }
  var d=new Date();
  
  var date="2018"
  console.log("year is "+date)
  var month=d.getMonth()+1;
  month=month.toString();
  if(month.length==1){
  
  month="0"+month;
  }
  var days=d.getDate().toString();
  if(days.length==1)
  {
  days="0"+days;
  }
  var f=date+"-"+month+"-"+days;
  console.log(f);
var price=meta["Time Series (Daily)"][f];
  var exis=0;
//console.log(body)
  
  stocks.find()
var newStock=new stocks;
  newStock.name=stname;
  var k;
  
  stocks.findOne({name:stname},function(err,docs){
  if(err){console.log(err)}
    if(docs!=null){
    
      if(like=="1"){
  exis=docs.ip.indexOf(add);
        if(exis==-1){
        k=Number(docs.);
        }
        
        
  }
  
      
     exis= docs.ip.indexOf(add);
      
  
    }  })
})
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
