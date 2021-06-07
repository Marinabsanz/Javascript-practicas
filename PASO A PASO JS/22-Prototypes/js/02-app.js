
function Cliente(nombre, saldo)  {
    this.nombre = nombre;    //no tengo por qué llamarlos igual
    this.dinerito = saldo; 
}

const marina = new Cliente ('marina',300 );

function formatearCliente (cliente) {
const {nombre, dinerito} = cliente;

return `el cliente ${cliente} tiene un saldo de ${dinerito}`;

}

console.log(formatearCliente('marina'))