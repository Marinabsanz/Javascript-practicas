//CONVERTIR STRINGS EN NÚMEROS

const number1 = "20";
const number2 = "20.2";
const number3 = "uno";
const number4 = 20;

console.log(Number.parseInt(number1)); //convertir el string en nº
console.log(Number.parseFloat(number2)); //aqui uso float xq tiene decimales
console.log(Number.parseInt(number3)); //da NaN xq no es un número

//Revisar si un número es entero o no
console.log(Number.isInteger(number4));
console.log(Number.isInteger(number2));
