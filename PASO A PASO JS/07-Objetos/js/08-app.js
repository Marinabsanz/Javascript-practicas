
"use strict";

//OBJECT METHODS


const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true,
    
}


//le puedo agregar
product.imagen = 'imag.jpg';
console.log(product);


//¿COMO FIJAR UN OBJETO?????CON USE STRICT
//CON USE STRICT YA TENGO ACCESO ahora  a OBJECT METHODS

//prevenir q un objeto sea modificado
Object.freeze(product);
// delete product.precio;   --no te deja borrar ni nada ya que esta congelado el obj producto

//como saber si un obj está congelado
console.log(Object.isFrozen(product));    //te dice que true