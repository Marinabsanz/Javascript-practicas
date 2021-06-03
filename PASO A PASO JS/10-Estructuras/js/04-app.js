const dinero = 200;
const totalAPagar = 300;
const tarjeta = true;

if (dinero >= totalAPagar) {
  console.log("puedes pagar");
} else if (tarjeta == true) {
  console.log("paga con tarjeta de credito");
} else {
  console.log("no puedes pagar");
}

//en los if se ejecuta la primera cosa que se cumple.
// si no tienes dinero xo si tarjeta true, si que te va a dar el ok.
