
const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true,
    
}

//agregar nuevas propiedades al objeto
//como estoy fuera del objeto ya no uso los dos puntos, si uso IGUAL

product.imagen = "imagen.jpg";

delete product.disponible;


console.log (product);