var mongoose = require('mongoose');
var mon = require('mongoose-unique-validator');
//schema are like blueprint for models
var Schema = mongoose.Schema;

var schema = new Schema({
  p_accident_id:{type:String},
  p_id : {type:String, required:true},
  p_name:  {type: String, required:true},
  p_mob_no: {type: Number, required:true, maxlength:10, minlength:10},
  p_location: {type: String, required:true}
},
{collection:'police'});

schema.plugin(mon);

module.exports = mongoose.model('pol', schema);
