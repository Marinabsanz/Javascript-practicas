const meses = ["enero", "febrero", "marzo"];

//usar metodos del array

//podría añadir abril asi:
// meses[3]= 'abril;   --->TENGO Q CONOCER LA POSICIÓN.así q añadir al final es mejor  PUSH

meses.push("abril");
meses.push("mayo", "junio", "julio", "agosto");
console.table(meses);

//////////////ejemplo carrito de la compra

const carrito = []; //array vacío
//voy a definir producto, creo un objeto,æquí van llaves y no corchetes
const producto = {
  nombre: "monitor de 20 pulgadas",
  precio: 300,
};

const producto2 = {
  nombre: "movil",
  precio: 150,
};

const producto3 = {
  nombre: 'teclado'
}

carrito.push(producto);
carrito.push(producto2);


carrito.unshift(producto3);   //UNSHIFT ME LO METE EL PRIMERO. LO EMPUJA PARA ARRIBA

console.table(carrito);