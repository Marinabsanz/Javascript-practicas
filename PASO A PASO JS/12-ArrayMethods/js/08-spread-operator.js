const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Movil", precio: 700 },
];

//añado un mes mas sin modificar el array. Esto es PROGRAMACIÓN FUNCIONAL
//con push lo modificaria por ejemplo

const meses2 = [...meses, "Agosto"];
console.log(meses2);

const meses3 = [...meses2, "Septiembre"];
console.log(meses3);

/////////////Añado nuevos valores al array d
const producto = { nombre: "disco duro", precio: 300 };

const carrito2 = [...carrito, producto];

console.log(carrito2);
