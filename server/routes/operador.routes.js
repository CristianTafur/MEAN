const router=require('express').Router();
const persona=require('../controllers/persona.controller');
const linea=require('../controllers/linea.controller');
const equipo=require('../controllers/equipo.controller');

router.get('/persona',persona.getpersonas);
router.post('/persona',persona.createPersona);
router.put('/persona/:id',persona.updatePersona);
router.delete('/persona/:id/:persona',persona.deletePersona); 

router.get('/persona/linea',linea.getLineas);
router.get('/persona/lineasDisponibles',linea.getLineasDisponibles);
router.get('/persona/lineasPersona/:persona',linea.getLineasPersona);

router.post('/persona/linea',linea.createLineaPersona); 
router.get('/persona/liena/:cedula',linea.getLineasPersona);
router.put('/persona/linea/:id',linea.updateLinea);

router.post('/linea',linea.createLinea); 

router.get('/persona/equipo',equipo.getEquipos)
router.get('/persona/equiposDisponibles',equipo.getEquiposDisponibles);
module.exports=router;