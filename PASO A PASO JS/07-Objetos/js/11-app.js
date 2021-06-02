//USO THE THIS PARA REFERIRSE AL OBJETO EN SI MISMO

"use strict";

const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true, 
    mostrarInfo: function () {
        console.log(`el producto : ${this.nombre} y un precio de ${this.precio}`)
    }
    
}




const product2 = {
    nombre:  'nuevo',
    precio: 100,
    disponible: true, 
    mostrarInfo: function () {
        console.log(`el producto : ${this.nombre} y un precio de ${this.precio}`)
    }
}
product.mostrarInfo();
product2.mostrarInfo();

//BUSCA LA PROPIEDAD CON THIS, SI NO , TENDRIA QUE SACAR LA VARIABLE FUERA

//EL uso de la palabra THIS vale para eso
