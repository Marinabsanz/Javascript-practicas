//Mira que se cumpla una cosa u otra


'use strict';
const efectivo  = 300;
const credito = 1000;
const disponible= efectivo+credito;
const totalToPay= 600;

if (efectivo > totalToPay || credito > totalToPay   || disponible = totalToPay) {

    console.log('puedes pagar');
} else {
    console.log('no puedes pagar');
}

//Se usa mucho en formularios  para ver si algo esta vacío