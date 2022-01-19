const express = require('express');

const ProductoService  = require('./../services/producto.service');

const router = express.Router();

const service = new ProductoService();

router.get('/',(req,res) =>{

  const productos = service.find();

  res.json(productos);


});

router.get('/filter',(req,res) =>{

  res.send('iohoihoih');

})


router.get('/:id',(req,res) =>{

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

