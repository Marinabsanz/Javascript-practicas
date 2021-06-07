const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Movil", precio: 700 },
];

//imaginemos que quiero todos los productos que cuesten mas d 400
//TE CREA NUEVO ARRAY con el resultado de lo que has buscado
let result = carrito.filter((producto) => producto.precio > 400);

result = carrito.filter((producto) => producto.precio < 600);
result = carrito.filter((producto) => producto.nombre !== "Audifonos");
//me das todos menos audifonos
console.log(result);

//
