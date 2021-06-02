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


//////////////DOS OPCIONES
//va iterando sobre cada objeto
for (let i= 0; i < carrito.length; i++)  {
    console.log(i);   //EL I TENDRA POSICION DINAMICA 
    console.log (`articulo: ${carrito[i].nombre} -precio: ${carrito[i].precio} `  );   
}


//MEJOR QUE ESTO de arriba, PARA HACER LO MISMO USAR EL FOREACH
//con array method 
//producto es como me refiero a cadauno

carrito.forEach(function(producto) {
    console.log (`articulo: ${producto.nombre} -precio: ${producto.precio} ` ); 

   

}
) 