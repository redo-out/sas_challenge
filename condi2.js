var prompt = require('prompt-sync')();
var n = prompt('write a number? ');
if (n >= 1){
    console.log("Le nombre est positif.")
}
if (n == 0){
    console.log("Le nombre est égal à zéro.");
}
if (n < 0)
    console.log("Le nombre est négatif.");

