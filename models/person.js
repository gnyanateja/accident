var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  accident_id: {type:String},
  license_no:{type:String},
  caused_the_accident:{type:String},
  safety_belt_or_helmet:{type:String},

},
{collection:"person"});

module.exports = mongoose.model('Person',schema);

