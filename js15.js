// Henter input og konverterer..
// Samt sætter value i andet input felt, mens det bliver cleared.

console.log("HELLO LOG WORLD!");
document.write("Hello document world!");

function convertTemp() {
  let c = document.getElementById("c"),
    f = document.getElementById("f");

    
// uden If
/*
'use strict';
var f = Number(prompt('Indtast fahrenheit'));
var c = 5 / 9 * (f - 32);
console.log(`${f} is ${c}`);
*/

  if (c.value != "") {
    f.value = Math.round((c.value * 9) / 5 + 32);
    c.value = "";
  } else {
    c.value = Math.round(((f.value - 32) * 5) / 9);
    f.value = "";
  }

}
