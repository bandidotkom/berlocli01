var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  category: String,
  venue: String,
  loc: [],
  checkins: []
});
var collection = 'activities';
module.exports = mongoose.model('Activity', schema, collection);
