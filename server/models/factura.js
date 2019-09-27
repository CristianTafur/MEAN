const mongoose=require('mongoose'); 
const Schema = mongoose.Schema;
const factura= new Schema({
    persona:{type:String,required:true},
    numero:{type:String,require:true},
    linea:{type: String,require:true}, 
    emision:{type: Date, require:true},
    valor:{type:Number,require:true}
});
module.exports = mongoose.model('factura', factura);