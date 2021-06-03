//EJEMPLO DE SWITCH CASE

//para revisar múltiples condiciones

const metodoDePago= 'efectivo';   //cambio a cheque tarjeta etc
  //dentro de parentesis de switch pongo lo q quiero comprobar


switch(metodoDePago)  {
    case 'efectivo':
         pagar ()
    console.log(`pagaste con ${metodoDePago}`);
    break;
    case 'tarjeta':
        console.log (`pagaste con ${metodoDePago}`);
        break;
    case 'cheque':
        console.log (`pagaste con ${metodoDePago}`);
        break;
    default:
        console.log( 'aún no has seleccionado el tipo de pago');
        break; 
}

function pagar(){

    console.log ('pagando............')
}