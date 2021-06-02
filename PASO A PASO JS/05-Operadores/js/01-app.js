'use strict';


const number1= 20;
const number2= "20";
const number3= 30;

console.log(number1>number3);
console.log(number1<number2);  


//comparar dos valores
//ver si son iguales


console.log(number1 == number2);  //igual pero el number2 es un string........ no es muy stricto, x eso dice que es true


console.log(number1 === number2);  //dice false porque este comparador es MÁS ESTRICTO

 console.log(typeof number1);
 console.log(typeof number2);

 //Recordar que puedo convertir el numero 2  de STRING A NUMBER
//  console.log(parseInt(number2));

//

//ver si son distintos. bueno xa contraseñas

const pasword1 = "admin";
const pasword2 = "Admin";


console.log(pasword1 != pasword2); // me dice que TRUE

console.log (number1 != number2);  // te dice false xq NO es estricto viendo dif
console.log(number1 !==number2); //te dice true xq aquí SI ES ESTRICTO y

console.log (number1 !== parseInt(number2)); //Aqui sale false xq lo acabo d convertir a number


