const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
]

//quiero ver donde esta abril en q indice


meses.forEach( (mes)=>   {
if (mes == 'Abril'){
    console.log(`encontrado el mes de ${mes}`)
}
})

//encontrar el indice de abril
const indice = meses.findIndex( (mes) => mes === 'Abril' )

console.log (indice);


//encontrar indice de array de objetos

const indice2 =carrito.findIndex(producto => producto.precio === 100);
console.log(indice2)    //solo encuentra el primero que cueste 100... mejor sería filter


