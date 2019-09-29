const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const linea= new Schema({
   numero:{type:String},
   persona:{type:String,default:'null'},
   estado:{type:String,default:'suspendida'}
});
module.exports = mongoose.model('linea', linea);