const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSubTypesSchema = new Schema({
  jobSubtype: {
    type: String,
  }
})
module.exports = mongoose.model('jobtype', JobSubTypesSchema);