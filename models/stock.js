var mongoose=require('mongoose');

var stockSchema=mongoose.Schema({

ip:String,
  name:String

})


module.exports=mongoose.model('sto',stockSchema);