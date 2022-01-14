const express = require('express');
const faker = require('faker');


const app = express();

const port = 3000;

app.get('/',(req,res) =>{
    res.send('Hello World');
})

app.get('/productos',(req,res) =>{
  const productos = [];
  for (let index = 0; index < 1000; index++) {

    productos.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(),10),
      image:faker.image.imageUrl(),

    });


  }
  res.json(productos);


});

app.get('/productos/:id',(req,res) =>{
  const { id } = req.params;
  res.json({
    id,
    nombre: 'Monitor',
    precio: '$300'
  })

});

app.get('/users',(req,res) =>{
  const { limit, offset } = req.query;
  if(limit&&offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No se encontraron parametros');
  }
});

app.get('/categorias/',(req,res) =>{

  const { categoryId, id } = req.params;
  res.json({
    categoryId,
    id,
    nombre: 'Monitor',
    precio: '$300'
  })


});

app.get('/tiendas',(req,res) =>{

  res.json({
    nombreTienda: 'Tienda 1',
    direccion: 'Calle 1',
    telefono: '123456789'

  })

})


app.listen(port,()=>{
  console.log('Mi port es: '+ port);
})


