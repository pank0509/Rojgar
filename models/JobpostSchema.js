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
    type: String
  },
  companyName: {
    type: String
  },
  jobTitle: {
    type: String,
  },
  vacancy: {
    type: String,
  },
  jobDescription: {
    type: String
  },
  minSalary: {
    type: String,
  },
  maxSalary: {
    type: String,
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
    type: String,
    required: true
  }
});
module.exports = mongoose.model('jobpost', JobpostSchema);
