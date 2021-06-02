const carrito = [
  { nombre: "monitor de 27 pulgadas", precio: 300 },
  { nombre: "tv", precio: 500 },
  { nombre: "tablet ", precio: 100 },

  { nombre: "teclado ", precio: 200 },
  { nombre: "movil ", precio: 150 },
];

const new1 = carrito.forEach((producto) => {
  ` ${producto.nombre} -precio: ${producto.precio} `;
});

const new2 = carrito.map((producto) => {
  return `articulo: ${producto.nombre} -precio: ${producto.precio} `;
});

console.log(new1);
