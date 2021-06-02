//las funciones han de usar parámetros y argumentos
function sumar(a, b) {
  //a y b son parámetros de función
  console.log(a + b);
}

sumar(2, 3); //2 y 3 son los argumentos. Valores reales. Te suma 5

sumar(200, 1); //reutilizo función con esos parámetros haciendo sumas distintas

function greeting(nombre, apellido) {
  //son parámetros, no son valores reales, son variables

  console.log(`hola ${nombre} ${apellido}`);
}
greeting("marina", "benitez");
