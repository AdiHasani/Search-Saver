const mongoose = require('mongoose');

const SaveQuerySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  query: {
    q: {
      type: String,
      require: true
    },
    result_type: String,
    count: Number
  }
});

module.exports = mongoose.model('privatQuerys', SaveQuerySchema);
