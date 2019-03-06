var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// User Schema
var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
},
{collection: "users"});

UserSchema.statics.hashPassword = function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

UserSchema.methods.isValid = function(hasedpassword){
  return bcrypt.compareSync(hasedpassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);

