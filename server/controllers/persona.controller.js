const Persona=require('../models/persona');
const personaCtrl={}; 
personaCtrl.getpersonas=async(req,res)=>{
  const personas=await Persona.find(/*{nombre: { $regex: '.*cristian.*' } }*/)/*.select('nombre cedula')*/;   
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
     
    const persona=new Persona(
        {
            cedula:cedula,
            nombre:nombre,
            apellido:apellido,
            date:new Date(date)//genera una fecha apartir de un string, para este caso la fecha de nacimiento
        }
    );//define estructura del documento
    persona.save(); //guarda en la base de datos
    res.json({status: 'Persona created'});//envia un json 
}
personaCtrl.getpersona=async (req,res)=>{
    const {cedula} =req.body;
    const persona = await Persona.findById(cedula);
    res.json(persona);

} 
personaCtrl.updatePersona=async (req,res)=>{
    const {cedula,nombre,apellido,date}=req.body; //recoje los datos del json
     
    const persona=new Persona(
        {
            cedula:cedula,
            nombre:nombre,
            apellido:apellido,
            date:new Date(date)//genera una fecha apartir de un string, para este caso la fecha de nacimiento
        }
    );//define estructura del documento
    await Persona.findByIdAndUpdate(cedula, {$set: persona}, {new: true});//{new : true} es, por si se agrega algun dato demas que se desee actulizar lo cree por nosotros,(solo aplica para datos no requridos) 
    res.json({status: 'Persona Updated'});
}
personaCtrl.deletePersona=async(req,res)=>{
    await Persona.findByIdAndRemove(req.params.id);
    res.json({status: 'Persona Deleted'});
}


module.exports=personaCtrl;