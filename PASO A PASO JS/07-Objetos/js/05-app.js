//crear objeto dentro d objetos


const product = {
    nombre:  'monitor de 20\"',
    precio: 300,
    disponible: true,
        info: { 
            peso: '1kg',
            medida: '1m'
    },
    fabricacion: {
        pais: 'china',

    }
    
}


console.log (product.info.peso);
console.log (product.fabricacion.pais);