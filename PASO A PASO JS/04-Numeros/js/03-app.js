"use strict";

let result;
//
result = Math.PI;

//rendodear
// result = Math.round(2.0);
// result = Math.round(2.2);
// result = Math.round(2.6);
result = Math.round(2.5);   //redonde hacia arriba

console.log(result);
//Redondear hacia arriba
result= Math.ceil (2.1);  //ESTO REDONDE PARA ARRIBA SIEMPRE
result= Math.ceil (2.5);

//redondear hacia abajo
result= Math.floor (2.9);

//raiz cuadrada
result= Math.sqrt(144);

console.log(result);

//Valor absoluto
result= Math.abs(-500);
console.log(result);

//potencia
result= Math.pow(8, 3);   //esto es multiplicar 8*8  y luego *8 otra vez
console.log(result);

//Si tengo una serie de números, quiero saber cual es el MÍNIMO

result = Math.min(3,5, 1, 12 , -3);     // acceder al mínimo de una serie de valores
result = Math.max (3,5, 1, 12 , -3);  //acceder al máximo
console.log(result);

//RANDOM NUMBER

result= Math.random();
console.log(result);

//aleatorio dentro de un rango..........
result= Math.round(Math.random()*22);   //ES MEJOR CON LO DE MAX Y WIDTH, No?? mirdar

console.log(result);