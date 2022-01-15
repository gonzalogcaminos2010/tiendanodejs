const faker = require('faker');

app.get('/categorias/',(req,res) =>{

  const { categoryId, id } = req.params;
  res.json({
    categoryId,
    id,
    nombre: 'Monitor',
    precio: '$300'
  })


});
