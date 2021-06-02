const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true,
        info: { 
            medidas: { 
            peso: '1kg',
            medida: '1m'
    },
    fabricacion: {
        pais: 'china',

    }
}
    
}
 /////////PRACTICAR

console.log(product.info.fabricacion.pais);

const {nombre, info, info: {fabricacion}} = product;

console.log (fabricacion);
console.log(info);