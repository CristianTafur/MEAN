const Persona=require('../models/persona'); 
const Linea=require('../models/linea');
const personaCtrl={}; 

personaCtrl.getpersonas=async(req,res)=>{
    const personas=await Persona.find(/*{nombre: { $regex: '.*cristian.*' } }*/).select('cedula nombre apellido date');   
  /* await Persona.deleteMany({},(err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log("elimino");
        
    }
   });  */ 
    res.json(personas);
}
personaCtrl.createPersona=async(req,res)=>{
     
    const {cedula,nombre,apellido,date}=req.body; //recoje los datos del json
     console.log("entro");
     console.log(req.body);
     
    const persona=new Persona(
        {
            cedula:cedula,
            nombre:nombre,
            apellido:apellido,
            date:new Date(date)//genera una fecha apartir de un string, para este caso la fecha de nacimiento
           
        }
    );//define estructura del documento
    persona.save(); //guarda en la base de datos
    res.json(persona);//envia un json 
}
personaCtrl.getpersona=async (req,res)=>{
    const {cedula} =req.body;
    const persona = await Persona.findById(cedula);
    res.json(persona);

} 
personaCtrl.updatePersona=async (req,res)=>{
    const {id}=req.params;//obtiene los parametros de la ruta
    const {cedula,nombre,apellido,date}=req.body; //recoje los datos del json
     console.log(cedula);
     
    const persona=
        {
            cedula:cedula,
            nombre:nombre,
            apellido:apellido,
            date:new Date(date)//genera una fecha apartir de un string, para este caso la fecha de nacimiento
        }
     //define estructura del documento
    console.log(persona);
    
    await Persona.findByIdAndUpdate(id, {$set: persona}, {new: true});//{new : true} es, por si se agrega algun dato demas que se desee actulizar lo cree por nosotros,(solo aplica para datos no requridos) 
    res.json({status: 'Persona Updated'});
}
personaCtrl.deletePersona=async(req,res)=>{
    const {id,cedula}=req.params;
    await Persona.findByIdAndRemove(id);
    var linea=await Linea.find({cedula});
    console.log(linea); 
    if (linea.length>0) {  
        linea=linea[0];
        linea.persona="null";
        linea.estado="suspendida"; 
        await Linea.findByIdAndUpdate(linea._id,{$set:linea},{new:true});
    }  
    res.json({status: 'Persona Deleted'});
}


module.exports=personaCtrl;