const express = require('express');
const res = require('express/lib/response');

const faker = require('faker');

const id = require('faker/lib/locales/id_ID');

const router = express.Router();

router.get('/',(req,res) =>{
  const tiendas = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < 1000; index++) {

    tiendas.push({
      nombre: faker.commerce.productName(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
      image:faker.image.imageUrl(),

    });


  }

  res.json(tiendas);


});

router.get('/filter',(req,res) =>{

  res.send('iohoihoih');

})


router.get('/tiendas/:id',(req,res) =>{

  const { id } = req.params;
  if(id === "999" ){

    res.status(404).json({

      message: 'Producto no encontrado'

    });

  } else {

    res.status(200).json({

      id,

      nombre: 'Monitor',

      precio: '$300'

    });

  }

});

router.post('/',(req,res)=>{

  const body = req.body;

  res.status(201).json({});

  res.json({

    message:'created',

    data: body

  });

});

router.patch('/:id',(req,res)=>{

  const { id } = req.params;

  const body = req.body;

  res.json({

    message:'created',

    data:body,

    id,

  });
}

);

module.exports = router;
