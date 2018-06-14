var mongoose=require('mongoose');

var stockSchema=mongoose.Schema({

ip:Array,
  name:String,
  like:Number

})


module.exports=mongoose.model('sto',stockSchema);