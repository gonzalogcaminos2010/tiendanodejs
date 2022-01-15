const express = require('express');
const faker = require('faker');
const router = express.Router();


router.get('/tiendas',(req,res) =>{

  res.json({
    nombreTienda: 'Tienda 1',
    direccion: 'Calle 1',
    telefono: '123456789'

  })

})
