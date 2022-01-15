const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/categorias/',(req,res) =>{

  const { categoryId, id } = req.params;
  res.json({
    categoryId,
    id,
    nombre: 'Monitor',
    precio: '$300'
  })


});
