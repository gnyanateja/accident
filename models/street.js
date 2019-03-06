var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  s_accident_id:{type:String},
  s_no:{type:String},
  s_name:{type:String},
  location:{type:String}
},
{collection:"street"});

module.exports = mongoose.model('Street',schema);
