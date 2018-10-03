const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const RegistrationSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true,
  },
  username: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
RegistrationSchema.methods.validPassword = function (password) {
  if (bcrypt.compareSync(password, this.password)) {
    return true
  } else {
    return false
  }
}
module.exports = mongoose.model('register', RegistrationSchema);