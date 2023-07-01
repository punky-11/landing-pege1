const crudUsuario = require('../controller/usuario');
const express = require('express');
const router =express.Router();


//pagina principal
router.get('/',crudUsuario.inicio);


module.exports=router;