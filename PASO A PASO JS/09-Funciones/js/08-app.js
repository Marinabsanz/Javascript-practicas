//esta viendo todo en consola, ahora empiezo con funciones que retornan valores
//CUANDO TENGO VALOR Q RETORNA, NECESITO OTRA VARIABLE a quien retornarle
function sumar(a, b) {
  return a + b;
}

const result = sumar(2, 3);

console.log(result);

////código más avanzado
let total= 0;
function addELement(price){
return total +=price;

}
function calculateTva(total){
  return total * 1.21;
}

const totalTopage= calculateTva(total);
total= addELement(300);
console.log(`el total a pagar es ${totalTopage}`);

//no me pilla la multiplicación del IVA 