const carrito = [
    {nombre: 'monitor de 27 pulgadas',
     precio: 300 },
     {nombre: 'tv',
     precio: 500 },
     {nombre: 'tablet ',
     precio: 100 },
   
     {nombre: 'teclado ',
     precio: 200},
     {nombre: 'movil ',
     precio: 150 },
   
   ]
   
//FOR EACH
   carrito.forEach(function(producto) {
       console.log (`articulo: ${producto.nombre} -precio: ${producto.precio} ` );
   
   }
   ) 

 //MAP
 carrito.map(function(producto) {
    console.log (`articulo: ${producto.nombre} -precio: ${producto.precio} ` );

}
) 

//Map crea nuevo array, y forEach no
//maap lleva un return 