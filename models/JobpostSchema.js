const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const JobpostSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  contactPersonName: {
    type: String,
    required: true
  },
  companyName: {
    type: String
  },
  jobTitle: {
    type: String,
  },
  vacancy: {
    type: Number,
  },
  jobDescription: {
    type: String,
    required: true
  },
  minSalary: {
    type: Number
  },
  maxSalary: {
    type: Number
  },
  city: {
    type: String
  },
  locality: {
    type: String,
  },
  experience: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('jobpost', JobpostSchema);
