const express = require('express');
const app = express();
const path=require('path');

const dotenv =require('dotenv');

dotenv.config();

//const morgan=require('morgan');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//app.use(morgan('dev'));
app.use(express.json());
//es como que esta bien la peticion y hace no se envie basio lo de la base de datos
//app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

//rutas
const router = require('./router/usuario');
app.use('/api/',router);


//PUERTO
const PORT= process.env.PORT ;

app.listen(PORT, ()=>{
    console.log('estoy en linea desde el puerto: '+ PORT);
});