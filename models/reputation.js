var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  locality: String,
  summary: String,
  keywords: []
});
var collection = 'reputations'
module.exports = mongoose.model('Reputation', schema, collection);
