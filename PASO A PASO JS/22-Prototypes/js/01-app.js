'use strict'

//todos los obj tienen un proto
//dos ormas de crear objeto---
//obj literal-  es muy estática

const cliente = {
    nombre: 'marina',
    saldo: 200,
}
console.log(cliente)   
console.log(typeof cliente)


//Para usar algo más dinámico, usar OBJECT CONSTRUCTOR

function Cliente(nombre, saldo)  {
    this.nombre = nombre;    //no tengo por qué llamarlos igual
    this.dinerito = saldo; 
}

const luna = new Cliente ('juan', 500);
console.log(luna)