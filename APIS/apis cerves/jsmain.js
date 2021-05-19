'use strict'


const url = 'https://api.punkapi.com/v2/beers';
const button = document.querySelector(".js-button");


function searchBeer () 
const inputResult = document.querySelector (".js-result");
fetch (url+inputResult)
.then (response => response.json ())
.then (data => {
    document.querySelector (".js-tipobeer").innerHTML= data.name;
    document.querySelector (".js-imag").src = image_url;

}

button.addEventListener ('click', searchBeer);