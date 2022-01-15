const { app } = require('faker/lib/locales/en');
const productosRouter = require('./routers/productos.router');
const usuariosRouter = require('./routers/usuarios.router');
function routerApi(){

  app.use('/productos',productosRouter);
  app.use('/usuarios',usuariosRouter);

}

module.exports = routerApi;
