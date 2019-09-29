const Equipo=require('../models/equipo');
const equipoCtrl={}; 
equipoCtrl.getEquiposDisponibles=async(req,res)=>{
    const equipos=await Equipo.find({$and:[{numero:'null'},{estado:'no reportado'}]}).select('serial');
    console.log(equipos);
    
    res.json(equipos);
}
equipoCtrl.getEquipos=async(req,res)=>{
   const  equipos=await Equipo.find();
   res.json(equipos);
}
module.exports=equipoCtrl;