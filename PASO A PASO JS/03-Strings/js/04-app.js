const producto = "       es un monitor de 20 pulgadas ";
//cortar espacio en blanco al inciio y final cadena de texto

console.log(producto.length);

// método para eliminar del inicio...
console.log(producto.trimStart());

//me sirve para los formularios, que se elimine cuando user mete datos con espacio

console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());
