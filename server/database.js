const mongoose = require('mongoose');
const URI = 'mongodb://localhost/operador';//si la base de datos no existe se crea
mongoose.set('useFindAndModify', false);
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true })//configuarciones de puerto
    .then(db => console.log('conecto'))
    .catch(err => console.error(err));

module.exports = mongoose;