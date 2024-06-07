/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays para generar excusas
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  // Función para obtener un número aleatorio
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  // Generar una excusa aleatoria
  let excuse =
    who[getRandomIndex(who)] +
    " " +
    action[getRandomIndex(action)] +
    " " +
    what[getRandomIndex(what)] +
    " " +
    when[getRandomIndex(when)];

  // Asignar la excusa al elemento con id "excuse"
  document.getElementById("excuse").innerHTML = excuse;

  console.log("Hello Rigo from the console!");
};
