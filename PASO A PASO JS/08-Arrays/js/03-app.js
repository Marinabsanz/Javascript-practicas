"use strict";


//Cómo acceder a todos los elementos del array   y RECORRERLO

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

console.table(meses);
console.table(meses[4]);   //me da mayo

//EL ARRAY PUEDE SER VARIABLE Y CLARO QUIERO RECORRERLO


//cuánto mide el array
// console.log(meses.length);   //ESTE SI TE LO CUENTA desde 1, te dice cuántos HAY


//ITERADOR PARA RECORRER ARRAY
//tiene 3 partes  el FOR LOOK
// 1- valor desde donde comienza
// 2-cúantas veces quiero que se ejecute el código??
// 3-
for (let i= 0; i < meses.length; i++)  {
    console.log(i);   //EL I TENDRA POSICION DINAMICA 
    console.log (meses [i]);   
}