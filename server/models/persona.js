const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const persona= new Schema({
    cedula:{type:String,require:true},
    nombre:{type: String,require:true},
    apellido:{type: String,require:true},
    date:{type: Date, require:true} 
});
module.exports = mongoose.model('persona', persona);