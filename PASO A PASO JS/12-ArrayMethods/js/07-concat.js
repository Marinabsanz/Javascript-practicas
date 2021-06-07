const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];

//////////////

//.concat
const resultado = meses.concat(meses2, meses3, "otro mes");

console.log(resultado);

//spread operator
const resultado2 = [...meses, ...meses2, ...meses3, "otro mes"];

//cuidado aqui al poner ...  si añado string, que se me añade por cada letra,

console.log(resultado2);
