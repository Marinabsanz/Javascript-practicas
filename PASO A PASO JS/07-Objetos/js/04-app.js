
const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true,
    
}


// forma antigua de asignar .....      const nombre = product.nombre;
console.log(product.nombre);


//DESTRUCTURING
const {nombre} = product;  //aquí extraigo el nombre y te crea var en 1 paso

console.log(nombre);   

const {precio} = product;

console.log(precio); 
const {nombre, precio} = product;  //igual,más limpio

//extraer algo que no existe añadiendo variable, es el siguiente paso
