var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  ve_accident_id:{type:String},
  ve_reg_no:{type:String},
  ve_owner_name:{type:String},
  ve_name:{type:String},
  ve_type:{type:String}
},
{collection:"vehicle"});

module.exports=mongoose.model('vehicle',schema);
