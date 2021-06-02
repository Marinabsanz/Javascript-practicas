const producto = {
    nombre: "monitor de 20 pulgadas",
    precio: 300,
    disponible: true
  };

//destructuring
  const { nombre, precio, disponible} = producto;

  console.log(nombre);

  //destructuring con array

  const numeros =  [10,20,30,40,50];
  

  const [, , tercero] = numeros;  //accedo solo al tercero sin crear variables
                                 //SE USA MUCHO EN REACT

  console.log(tercero)
