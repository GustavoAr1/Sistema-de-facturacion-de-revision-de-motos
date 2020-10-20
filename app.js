var a = 10;
var b = 20;
var result = a * b;
console.log(`El valor resultado de multiplicar ${a} por ${b} es ${result}`);

const express = require('express');
 const app = express(); 
 const port = 3000;
  app.get('/', (req, res) => { res.send("Bienvenido querido cliente. Recuerde que trabajamos para brindarle una buena atención. Disfrute de nuestros servicios cuando usted lo desee");
 }); app.listen(port, () => { console.log(`Aplicación de ejemplo escuchando en http://localhost:${port}`); 
}) ;process.env.RUNKIT_ENDPOINT_URL;