const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/',(req,res) =>{
  const productos = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < 1000; index++) {

    productos.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(),10),
      image:faker.image.imageUrl(),

    });


  }
  res.json(productos);


});

routerget('/filter',(req,res) =>{

  res.send('iohoihoih');

})


router.get('/:id',(req,res) =>{
  const { id } = req.params;
  res.json({
    id,
    nombre: 'Monitor',
    precio: '$300'
  })

});

module.exports = router;

