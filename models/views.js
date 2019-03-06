var mongoose = require('mongoose');

// User Schema
var Schema = new mongoose.Schema({
	vid: {
		type: String,

	},
	v_accidentid: {
		type: String
	},
	v_name: {
		type: String
	},
	v_mob_no: {
		type: Number
  },
  v_address: {
		type: String
  }

},
{collection: "views"});

module.exports = mongoose.model('View', Schema);

