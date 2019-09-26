const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const equipo= new Schema({
   sereal:{type:String},
   numero:{type:String},
   marca:{type:String},
   descripcion:{type:String},
   estado:{type:String}
});
module.exports = mongoose.model('equipo', equipo);