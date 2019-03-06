var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  location:{type:String},
  glat:{type:String},
  glong:{type:String}

},
{collection:"locate"});

module.exports = mongoose.model('Locate',schema);
