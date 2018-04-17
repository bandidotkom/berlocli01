var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  data: [{
    Geschl: Number,
    Staatsangeh: String,
    Altersgr: String,
    H: Number
  }]
});
var collection = 'population'
module.exports = mongoose.model('Population', schema, collection);
