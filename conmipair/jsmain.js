'use strict';

//flujo 1;
//cuando la usuaria escribe:
//-comprobar si ha escrito borrar
//si: activo el boton
//no: desactivo

//flujo 2: 
//cuandoe(EVENTo) usuaria hace click >> comprobar si ha escrito borrar
////si: borro
//no: no hago nada


const inputElement= document.querySelector ("js-input");
function handleINput() {
    const inputValue = inputElement.value;
    console.log ('me han escrito', inputElement.value);
    const submitElement = document.querySelector(".submit")
    if( inputValue=== 'BORRAR'){
        submitELement.classList.add('active');
    } else {
        submitElement.classList.remove ('active');
    }

}

inputElement.addEventListener ('keyup', handleINput);

//moverinput value dentro de la funcion para  que sea siempre lo que la usuaria escirbe, no que coja lo que viene desde el principio como valor