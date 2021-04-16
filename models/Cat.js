const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Cat Schema
const CatSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    required: true
  }
});

module.exports = Cat = mongoose.model('cat', CatSchema);
