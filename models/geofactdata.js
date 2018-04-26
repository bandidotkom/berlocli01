var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  locality: String,
  area: String,
  population: Number,
  density: Number
});
var collection = 'facts'
module.exports = mongoose.model('Geofacts', schema, collection);
