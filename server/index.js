//dependecias necesarias
const express = require('express');//es un framework para el backend en node, facilita el uso de modulos o dependecias.
const cors = require('cors');//es un modulo o dependecia que permite los accesos al servidor 
const app = express();//prepara a Express para ser usado

//dependencias de desarrollo
const morgan=require('morgan');//dependecia de desarrollo para el control de peticiones (poder observar cuando se consume X ruta) 
//conexion a base de datos
const { mongoose } = require('./database');

// configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares (dependias o modulos que configuaran de maner "automatica", los permisos de servidor, el consumo y producion de JSON)
app.use(cors({origin: 'http://localhost:4200'},{origin:'http://localhost:4200/usuarios'},{origin:'http://localhost:4200/usuarios/facturas'}));
app.use(express.json());
//middlewares no necesarios para funcionamiento del API REST
app.use(morgan('dev'));
// Rutas
app.use('/api/operador', require('./routes/operador.routes'));

//inicar el servidor 
app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});