//Más métodos

const producto = "es un monitor de 20 pulgadas ";

//.repeat    muestro cadena múltiples veces

const texto = " en promoción".repeat(3); //si le pasas a repeat un nº no entero, el nº se redondea

console.log(texto);
console.log(`${producto} + ${texto} Amigo mio!!!!`);

//split  para dividir un string

const actividad = "estoy aprendiendo js";

console.log(actividad);

console.log(actividad.split(" "));

const hobbies = "leer, caminar, escuchar música, programar";
console.log(hobbies.split(", "));

const tweet = "cómo hace twitter para resaltar palabras? #twiteando";
console.log(tweet.split("#"));

//lo normal es que esto se haga mezclando SPLIT e INCLUDE
