const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
]



//comprobar si un valor existe en un array

meses.forEach((mes) => {
    console.log(mes)
    if (mes ==='Enero') {
        console.log('enero existe')
    }
});

const resultado = meses.includes('Diciembre');   //esta opcion es más corta
console.log (resultado)

//En array de objetos es mejor usar .some

/* const existe = carrito.some( (productocarrito)=> 
{
return productocarrito.nombre === 'Movil'
console.log(existe)


}
)
*/ 
//lo puedo dejar mas compacto el código sin return ni corchete al ser solo 1:
const existe = carrito.some( (productocarrito)=> productocarrito.nombre === 'Movil');
console.log(existe)

//En array tradicional

const existe2 = meses.some((mes)=> mes === 'Enero'  );
console.log(existe2);