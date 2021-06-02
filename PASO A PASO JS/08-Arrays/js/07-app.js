

const carrito = []; //array vacío 
const producto = {
    nombre: "monitor de 20 pulgadas",
    precio: 300,
  };
  
  const producto2 = {
    nombre: "movil",
    precio: 150,
  };
  
  const producto3 = {
    nombre: 'teclado'
  }



  const producto4= {
    nombre: 'cosita'
  }
  
  carrito.push(producto);
  carrito.push(producto2);
  
  
  carrito.unshift(producto3);   


  //ELIMINAR ULTIMO ELEMENTO DE UN ARRAY
  //en objeto era  delete.objeto.nombre;

  carrito.pop();

//   console.table(carrito);  //aqui t cargas ya el producto 3. ELIMINAR CON POP
 
//eliminar del principio   SHIFT
  carrito.shift();
  console.table(carrito);


//ELiminar del medio
carrito.splice (3,1); //DECIR DESDE DONDE ELIMINO, Y CUANTOS ELEMENTOS ELIMINO


console.table(carrito);