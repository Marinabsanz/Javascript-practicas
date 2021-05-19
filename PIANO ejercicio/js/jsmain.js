'use strict'

//2 eventos 

//alert ('Bienvenid@ a mi piano  :D');


const buttonDo = document.querySelector(".js-do");
const buttonRe= document.querySelector(".js-re");
const buttonMi= document.querySelector(".js-mi");
const buttonFa= document.querySelector(".js-fa");
const buttonASol= document.querySelector(".js-sol");
const buttonLa= document.querySelector(".js-la");
const buttonSi= document.querySelector(".js-si");

const buttons= document.querySelectorAll ('button');   

buttons.forEach ( 
    button => button.addEventListener ('click', reproduceSound) 
);


function reproduceSound (event) {
    const button = event.target;
    const note = button.dataset.note;

    const audio = document.getElementById (`audio${note}`) ;

    audio.pause()
    audio.currentTime= 0;
    audio.play();
    console.log(audio);
}

 function pulse () {
document.addEventListener ('keydown', pulse ) ;
const key = evt.key;

}

//NO ME SALE!!!!!!!!!!!!!!!!!!!!1