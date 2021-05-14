'use strict'

//2 eventos 

//alert ('Bienvenido a mi piano');


const buttonDo = document.querySelector(".js-do");
const buttonRe= document.querySelector(".js-re");
const buttonMi= document.querySelector(".js-mi");
const buttonFa= document.querySelector(".js-fa");
const buttonASol= document.querySelector(".js-sol");
const buttonLa= document.querySelector(".js-la");
const buttonSi= document.querySelector(".js-si");



buttonDo.addEventListener ('click', reproduceSound() );
//buttonDo.alert ('hola soy do'); no va
 
function reproduceSound (event) {
    let audio = document.querySelector (".js-DWaw");
   
}