const router=require('express').Router();
const persona=require('../controllers/persona.controller');
const linea=require('../controllers/linea.controller');
router.get('/persona',persona.getpersonas);
router.post('/persona',persona.createPersona);
router.put('/persona/:id',persona.updatePersona);
router.delete('/persona/:id/:cedula',persona.deletePersona); 

router.get('/persona/linea',linea.getLineas);
router.get('/persona/lineasDisponibles',linea.getLineasDisponibles);

router.post('/persona/linea',linea.createLineaPersona); 
router.get('/persona/liena/:cedula',linea.getLineasUsuario)
router.put('/persona/linea/:id',linea.updateLinea);

router.post('/linea',linea.createLinea); 
module.exports=router;