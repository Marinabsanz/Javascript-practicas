
////METODOS  REPLACE SLICE SUBSTRING CHARAT 

const producto = "es un monitor de 20 pulgadas";

//si quiero remplazar algo. UNa palabra por otra

console.log(producto);
console.log(producto.replace("pulgadas", '""'));


//si quiero Añadir una palabra. MOdificar texto ya existente   .slice cortar
 console.log(producto.slice(0,10));  // donde empieza a cortar y el caracter en el que cierra
 console.log(producto.slice(8)) ;  //del 8 en adelante va


 //una alternativa a slice que se llama substring. donde empeizas a cortar y donde acabas

 console.log(producto.substring(0,10));
 console.log (producto.substring(2,1));  //es mas listo, corta del 2 al 1. slice no hace nada aquí


 const user = "marina";

 console.log( user.substring (0,1));   //PARA HACER COMO EN GOOGLE Q PONE TU PRIMERA LETRA
 console.log(user.charAt(0));   //igual, es otra opcíon- con DOm ya le inyectas cositas y un circulito y tal
