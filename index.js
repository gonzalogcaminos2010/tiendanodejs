const express = require('express');
const faker = require('faker');
const routes = express.Router();


const app = express();

const port = 3000;

app.get('/',(req,res) =>{
    res.send('Hello World');
})








app.listen(port,()=>{
  console.log('Mi port es: '+ port);
})


