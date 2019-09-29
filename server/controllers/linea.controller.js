const Persona=require('../models/persona'); 
const Linea=require('../models/linea');
const Equipo=require('../models/equipo');
const lineaCtrl={}; 
lineaCtrl.getLineas=async(req,res)=>{ 
    //await Linea.deleteMany(); await Equipo.deleteMany();
    const lineas=await Linea.find().select('numero persona estado');
    
    res.json(lineas);
}
lineaCtrl.getLineasDisponibles=async(req,res)=>{ 
    //await Linea.deleteMany();
    const linea=await Linea.find({estado:'suspendida'}).select('numero estado');
    //console.log(linea);
    
    res.json(linea);
}
lineaCtrl.getLineasPersona=async(req,res)=>{ 
    const {persona}=req.params; 
    const linea=await Linea.find({$and:[{persona},{estado:'activa'}]}).select('numero persona estado');
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
    const {persona,serial,marca,numero,descripcion}=req.body; //recoje los datos del json
    console.log("entradas:");
    console.log(req.body);
    var linea=await Linea.find({numero});
    console.log("linea:");
    console.log(linea);
    if (linea.length>0) {
        linea=linea[0];
        const id=linea._id;
        linea={
           persona: linea.persona=persona,
           estado: linea.estado="activa" 
        }  
        console.log("actualizando");
        console.log(linea);
        linea=await Linea.findByIdAndUpdate(id,{$set:linea},{new:true});
        console.log("actualizado");
        console.log(linea);
        
    }else{
        const linea = new Linea({
            numero,
            persona,
            estado:"activa"
        });
        await linea.save();
        console.log("creado");
        
    }
    const equipo=new Equipo(
        {serial,
        numero,
        marca,
        descripcion,
        estado:"no reportado"}
    );
    await equipo.save();
    console.log("creado equipo");
   res.json({linea:'creada'});//envia un json 
}
lineaCtrl.updateLinea=async(req,res)=>{

}
module.exports=lineaCtrl;