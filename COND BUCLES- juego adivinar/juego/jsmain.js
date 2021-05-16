"use strict";


const result = document.querySelector(".js-result");
const send = document.querySelector(".js-submit");
const randomNumber = getRandomNumber(1);
console.log("El número random", randomNumber); 
function getRandomNumber() { const number = ( Math.random() * 1 ); return number; } 
function toSend() {
  if (randomNumber <= 0.3) {
    console.log("SI");
    result.innerHTML = "SI";
  } else  if (randomNumber >= 0.8)  {
    console.log("NO");
    result.innerHTML = "NO";
  } 
}


send.addEventListener("click", toSend);

 console.log(randomNumber);
 