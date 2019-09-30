const Factura=require('../models/factura');
const facturaCtrl={}
facturaCtrl.createFacturaPersona=async(req,res)=>{
  const {persona,linea,valor}=req.body;
  console.log(req.body);
  const facturas=await Factura.find({persona});
  const numero=facturas.length+1;
  const factura=new Factura({
      persona,
      numero,
      linea,
      valor 
  }); 
  factura.save();
  res.json(factura);
}
facturaCtrl.getFacturasPersona=async(req,res)=>{
  const {persona,emision}=req.params;
  console.log(req.params);
  //{$and:[{persona},{estado:'activa'}]}emision:{ $gte: '1987-10-19'}
  var facturas=[];
  try {
    facturas =await Factura.find({$and:[{persona},{emision:{ $gte: emision}}]});
  } catch (error) {
    
  } 
   res.json(facturas)
}
facturaCtrl.getFacturas=async(req,res)=>{
    const facturas=await Factura.find();
   res.json(facturas)
}
facturaCtrl.deleteFacturaPersona=async(req,res)=>{
 console.log(req.params);
 const{id}=req.params;
 await Factura.findByIdAndRemove(id);
  res.json({ok:"oka"})
}
module.exports=facturaCtrl;