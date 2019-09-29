const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const equipo= new Schema({
   serial:{type:String},
   numero:{type:String,default:'null'},
   marca:{type:String},
   descripcion:{type:String},
   estado:{type:String,default:'no reportado'}
});
module.exports = mongoose.model('equipo', equipo);