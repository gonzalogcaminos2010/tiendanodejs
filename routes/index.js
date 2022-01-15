const productosRouter = require('./productos.router');
const tiendasRouter = require('./tiendas.router');
const usuariosRouter = require('./usuarios.router');
function routerApi(app){

  app.use('/productos', productosRouter);
  app.use('/usuarios', usuariosRouter);



}

module.exports = routerApi;
