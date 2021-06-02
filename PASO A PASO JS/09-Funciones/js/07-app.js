'use strict';


startApp();

function startApp(){

    console.log('Starting app');

    secondFunction()   //la meto dentro para que llame a la segunda function y las encadeno
    
function secondFunction(){

    console.log('pensando...');
    verifyUser('marina')  ;  //otra más para que se cargue después
}
}


function verifyUser(user){
    console.log('verificando usuario...');
    console.log(`usuario verificado con éxito: ${user}`);
    
}


