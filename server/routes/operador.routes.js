const router=require('express').Router();
const persona=require('../controllers/persona.controller');
router.get('/',persona.getpersonas);
router.post('/',persona.createPersona);
router.put('/',persona.updatePersona);
router.delete('/',persona.deletePersona);
module.exports=router;