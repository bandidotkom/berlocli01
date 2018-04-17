var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  geometry: {
    type: String,
    coordinates: []
  },
  properties: {
    Description: String,
    Name: String,
    checkins: [{type: {type: Schema.Types.ObjectId, ref:'Activity'}}]
  }
});
var collection = 'localities';
module.exports = mongoose.model('Locality', schema, collection);
