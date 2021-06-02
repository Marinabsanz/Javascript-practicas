//USO THE THIS PARA REFERIRSE AL OBJETO EN SI MISMO
//USO DE OBJECT CONSTRUCTOR
"use strict";


//OBJECT LITERAL
const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true, 
   
    
}

//OBJECT CONSTRUCTOR

function newProduct (nombre, precio) {
    this.nombre= nombre;
    this.precio= precio;
    this.disponible= true;


}

const product2 = new newProduct ('monitor de 24 pulgadas', 500);

console.log(product2);

const producto3 = new newProduct ('television', 100);
console.log(producto3);