const productosRouter = require('./productos.router');
const categoriasRouter = require('./categorias.router');
const usuariosRouter = require('./usuarios.router');
const tiendasRouter = require('./tiendas.router');
const express = require('express');
function routerApi(app){

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/productos', productosRouter);
  router.use('/usuarios', usuariosRouter);
  router.use('/tiendas', tiendasRouter);



}

module.exports = routerApi;
