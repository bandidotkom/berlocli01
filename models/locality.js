var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  _id: Schema.Types.ObjectId,
  geometry: {
    type: String,
    coordinates: []
  },
  checkins: [{category: String, checkins: [String]}],
  properties: {
    Description: String,
    Name: String
  }
});
var collection = 'localities';
module.exports = mongoose.model('Locality', schema, collection);
