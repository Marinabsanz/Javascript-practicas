

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];


//every   todos los elementos deben cumplir una condicion para que t devuelva algo
//con some saca uno,  es como equivalente a &&    OR

const result = carrito.every (producto => producto.precio < 500);

console.log(result)

const result2 =carrito.some (producto => producto.precio <500);

console.log(result2)