'use strict'

//2 eventos 

// alert ('Bienvenido a mi piano');

//vamos asignar evento a un elemento

const buttonDo = document.querySelector(".js-do");



/* buttonDo.addEventListener('click', function () {
    alert('Esta es la tecla DO');
} )   ------- me lia */  
//pruebo ahora más como en CLase: 

/* function handleBoton () {
   alert ('holasoy  la tecla DO')
}
buttonDo.addEventListener ('click', handleBoton ); /*/

buttonDo.addEventListener ('click', reproduceSound);

function reproduceSound () {
    const buttonDoWaw = document.querySelector('.js-DWaw') ;
    buttonDoWaw.play();

}

