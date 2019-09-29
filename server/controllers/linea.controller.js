const Persona=require('../models/persona'); 
const Linea=require('../models/linea');
const Equipo=require('../models/equipo');
const lineaCtrl={}; 
lineaCtrl.getLineas=async(req,res)=>{ 
    //await Linea.deleteMany();
    const linea=await Linea.find().select('numero persona estado');
    
    res.json(linea);
}
lineaCtrl.getLineasDisponibles=async(req,res)=>{ 
    //await Linea.deleteMany();
    const linea=await Linea.find({estado:'suspendida'}).select('numero estado');
    console.log(linea);
    
    res.json(linea);
}
lineaCtrl.getLineasUsuario=async(req,res)=>{ 
    const {cedula}=req.params;
    const linea=await Linea.find({$and:[{cedula},{estado:'activa'}]}).select('numero');
    res.json(linea);
}
lineaCtrl.createLinea=async(req,res)=>{
    const {numero}=req.body; //recoje los datos del json
    console.log("entro");
    console.log(req.body);
    
   const linea=new Linea(
       {
          numero
       }
   );//define estructura del documento
   linea.save(); //guarda en la base
   res.json(linea);//envia un json 
}
lineaCtrl.createLineaPersona=async(req,res)=>{
    const {persona,numero}=req.body; //recoje los datos del json
    console.log("entradas:");
    console.log(req.body);
    var linea=await Linea.find({numero});
    console.log("linea:");
    console.log(linea);
    if (linea.length>0) {
        linea=linea[0];
        linea.persona=persona;
        linea.estado="activa"; 
        linea=await Linea.findByIdAndUpdate(linea._id,{$set:linea},{new:true});
        console.log("actualizado");
        console.log(linea);
        
    }else{
        const linea = new Linea({
            numero,
            persona,
            estado:"activa"
        });
        linea.save();
        console.log("creado");
        
    }
   res.json({linea:'creada'});//envia un json 
}
lineaCtrl.updateLinea=async(req,res)=>{

}
module.exports=lineaCtrl;