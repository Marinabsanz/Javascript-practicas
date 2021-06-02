const carrito = []; //array vacío

const producto = {
  nombre: "monitor de 20 pulgadas",
  precio: 300
};

const producto2 = {
  nombre: "movil",
  precio: 150
};

const producto3 = {
  nombre: 'teclado',
  precio: 50
}

//forma imperativa era PUSH
//forma declarativa sería distinta con funciones
//no modifica la variable si no que crea una nueva

let result = [...carrito, producto]; //no queda muy claro que hace.pero el carrito no lo modifico
//LO DECLARATIVO SE USA MAS EN PROGRAMACIÓN FUNCIONAL


result = [...result, producto2];


console.table(result);
// console.table(carrito);