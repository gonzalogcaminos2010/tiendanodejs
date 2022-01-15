const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/usuarios',(req,res) =>{
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
exports = module.exports = router;
