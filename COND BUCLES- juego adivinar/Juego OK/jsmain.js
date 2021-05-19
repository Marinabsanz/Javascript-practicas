"use strict";


const result = document.querySelector(".js-result");
const send = document.querySelector(".js-submit");
//const randomNumber = getRandomNumber(1)-->>>tiene q ir dentro d la función


function getRandomNumber() {
   const number = ( Math.random() * 1 ); 
   return number; 
  } 
function toSend() {
  const randomNumber = getRandomNumber(1);
  console.log(randomNumber);
  if (randomNumber <= 0.3) {
    console.log("SI");
    result.innerHTML = "SI";
  } else  if (randomNumber >= 0.7)  {
    console.log("NO");
    result.innerHTML = "NO";
  } else  {
    console.log ("quizás") ;
    result.innerHTML = "Quizás"
  }
}
send.addEventListener("click", toSend, );
//send.addEventListener ("keyup" "disable", toSend);
// ¿¿como y donde aplicar el DISABLE TRUE O FALSE????????