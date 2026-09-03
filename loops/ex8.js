const prompt = require('prompt-sync')();
let n = +prompt("Nombre de missions : ");

let i = 1;
console.log(" ");
while (i <= n){
    console.log("Mission " + i + " -> " + "Score : " + i * 100);
    i++;
}