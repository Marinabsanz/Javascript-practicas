

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
]


//como seria con un foreach  sumar precio total
let total = 0;
carrito.forEach(producto => total += producto.precio)
console.log(total);

//con reduce cambia la cosa
//dos parametros, el previo y el otro... va acumulando.   0 para iniciar
let resultado = carrito.reduce ((total, producto) => total + producto.precio, 0) ;

console.log( resultado)