"use strict";


///TENGO DOS OBJETOS
const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true,
    
}

const medidas = {
    peso:'1kg',
    medida: '1m'
}

console.log(product);
console.log(medidas);

//UNIR OBJETOS
const result = Object.assign(product, medidas);
 console.log(result);

 //OTRA FORMA SPREAD OPERATOR o REST OPERATOR

 const result2 = { ...product, ...medidas };  //copia y asigna dentro del objeto
 console.log (result2);