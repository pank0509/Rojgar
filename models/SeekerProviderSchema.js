const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeekerProviderSchema = new Schema({
  seekerId: {
    type: String,
  },
  providerId: {
    type: String,
  }
});
module.exports = mongoose.model('seekerProvider', SeekerProviderSchema);
