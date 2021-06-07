"use strict";

const carrito = document.querySelector("#carrito");
const container = document.querySelector("#lista-carrito, tbdoy");
const vaciarcarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

//table body
cargarEventListener();

function cargarEventListener() {
  listaCursos.addEventListener("click", agregarcurso);
}

//funciones

function agregarcurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    console.log(e.target);

    leerDatosCurso();
  }
}
function leerDatosCurso() {}
