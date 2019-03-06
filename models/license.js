var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  license_no:{type:String},
  name:{type:String},
  sex:{type:String},
  age:{type:Number},

},

{collection:"license"});

module.exports = mongoose.model('License',schema);


