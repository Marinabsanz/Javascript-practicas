"use strict";

//arrays sirven para agrupar elementos del mismo tipo
//mientras que un obj agrupa inf de un elemento
//la forma q fb muestra listado de amigos-->seguramente en un array

//OBJETOS SE CREAN CON {}. las partes la diferencias con :

//ARRAYS SE CREAN CON []  las partes las diferencias con ,

const numbers = [10, 20, 30];

console.log(numbers); //veo la posicion que tienen . empieza en cero

// const meses = new Array('enero', 'febrero')   //esta forma es menos popular . es otro constructor

//CREAMOS ARRAY REMIZCLADO CON COSAS DE TODO TIPO- + array dentro de array
const deTodo = [
  "hola",
  10,
  true,
  "si",
  null,
  { nombre: "marina,", trabajo: "front-end" }, [1,2,3],
];

console.log(deTodo);
