"use strict";

//existen tres formas de crear una cadena de texto

//cuidado con cambio de comillas

const producto = 'monitor de 20"'; //PARA USAR LAS "" y no de fallo. ESCAPAR COMILLAS-truco
const producto2 = String("monitor 20 pulgadas");
const producto3 = new String("monitor de 24 pulgadas"); //crear nuev objeto de tipo string menos habitual
console.log(producto);
console.log(producto2);
console.log(producto3);

//Strings son representaciones de texto básicamente
