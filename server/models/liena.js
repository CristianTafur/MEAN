const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const linea= new Schema({
   numero:{type:String},
   persona:{type:String},
   estado:{type:String}
});
module.exports = mongoose.model('linea', linea);