"use strict";


const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true,
    
}

Object.seal(product);
console.log(Object.isSealed(product)); 

//SEAL NO TE DEJA BORRAR PROPIEDADES NI AGREGARLAS, PERO SI MODIFICAR LO EXISTENTE

product.disponible= false;

console.log(product);