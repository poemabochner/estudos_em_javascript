"use strict";

function teste() {
  if (true) {
    let nome = "Bruno";
    console.log("dentro do if do teste: " + nome);
  }
  console.log("dentro do teste: " + nome);
}

teste();

console.log("fora do teste: " + nome);
