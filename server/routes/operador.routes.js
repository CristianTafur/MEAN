const router=require('express').Router();
const persona=require('../controllers/persona.controller');
const linea=require('../controllers/linea.controller');
const equipo=require('../controllers/equipo.controller');
const factura=require('../controllers/factura.controller');

router.get('/getpersona/:cedula',persona.getpersona);
router.get('/getpersonas',persona.getpersonas);
router.post('/createPersona',persona.createPersona);
router.put('/updatePersona/:id',persona.updatePersona);
router.delete('/deletePersona/:id/:persona',persona.deletePersona); 

router.get('/getLineas',linea.getLineas);
router.get('/getLineasDisponibles',linea.getLineasDisponibles);
router.get('/getLineasPersona/:persona',linea.getLineasPersona);

router.post('/createLineaPersona',linea.createLineaPersona); 
router.get('/getLineasPersona/:cedula',linea.getLineasPersona);
router.put('/.updateLinea/:id',linea.updateLinea);

router.post('/createLinea',linea.createLinea); 

router.get('/getEquipos',equipo.getEquipos)
router.get('/getEquiposDisponibles',equipo.getEquiposDisponibles);

router.get('/getFacturas',factura.getFacturas);
router.get('/getFacturasPersona/:persona/:emision',factura.getFacturasPersona);
router.post('/createFacturaPersona',factura.createFacturaPersona);
router.delete('/deleteFacturaPersona/:id',factura.deleteFacturaPersona);

module.exports=router;