const faker = require('faker');
 class ProductoService {

  constructor(){
    this.productos = [];
    this.generate();

  }

  generate(){
    const limit = 100;
    for (let index = 0; index < 1000; index++) {

      this.productos.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(),10),
      image:faker.image.imageUrl(),

    });


    }
  }

  create(){

  }

  find(){

    return this.productos;

  }

  findOne(){

  }

  update(){



  }

  delete(){

  }



 }

 module.exports = ProductoService;
