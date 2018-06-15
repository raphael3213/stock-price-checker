var mongoose=require('mongoose');

var stockSchema=mongoose.Schema({

ip:Array,
  name:String,
  like:{
  type:Number,
    default:0
  }

})


module.exports=mongoose.model('sto',stockSchema);