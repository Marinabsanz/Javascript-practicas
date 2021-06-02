//métodos para strings

const producto = 'es un monitor de 20';

console.log (`El producto`+ producto );
console.log (producto.length);  //cuenta cuantas letras tiene la cadena de texto/string


console.log (producto.indexOf('monitor'));  //ndica la posición doe la palabra o -1 ,si no está

console.log (producto.includes('monitor'));  // lo busca,DIF MAY y MINUSC. si no está sale false