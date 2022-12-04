const mongoose = require('mongoose');

const PropertyTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  unit: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('propertyType', PropertyTypeSchema);
