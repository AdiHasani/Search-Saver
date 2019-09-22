const mongoose = require('mongoose');

const SaveAllQueriesSchema = mongoose.Schema({
  query: {
    q: {
      type: String,
      required: true
    },
    result_type: String,
    count: Number
  }
});

module.exports = mongoose.model('allQuerys', SaveAllQueriesSchema);
