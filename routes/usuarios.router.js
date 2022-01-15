const express = require('express');
const faker = require('faker');
const router = express.Router();


router.get('/usuarios',(req,res) =>{
  const usuarios = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < 1000; index++) {

    usuarios.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(),10),
      image:faker.image.imageUrl(),

    });


  }

  res.json(usuarios);


});
exports = module.exports = router;
