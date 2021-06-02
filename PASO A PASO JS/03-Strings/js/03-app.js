//vamos a concatenar 


const producto = 'es un monitor de 20 pulgadas y cuesta ';
const precio= '130 euros';


console.log (producto.concat(precio));


console.log (producto.concat('con descuento'));

//FORMAS DISTINTAS PARA CONCATENAR

console.log (producto+precio+ " en descuento");

console.log ("el producto"+ producto+ "tiene un precio de "+ precio);
console.log ("el producto", producto, "tiene un precio de ", precio);

//ecmaScript6 trajo consigo template literals.las comillas francesas --
//ESTA ES LA MEJOR Y MÁS NUEVA--

console.log (`el producto ${producto} tiene un precio de ${precio}`);