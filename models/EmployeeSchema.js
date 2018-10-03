const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String,
    required: true
  },
  alternatePhoneNumber: {
    type: String
  },
  address: {
    type: String
  },
  school: {
    type: String,
  },
  education: {
    type: String,
  },
  field: {
    type: String,
  },
  grade: {
    type: String
  },
  typeOfJob: {
    type: String,
  },
  experience: {
    type: String,
  },
  avgSalary: {
    type: String,
  }
});
module.exports = mongoose.model('employeeprofile', EmployeeSchema);