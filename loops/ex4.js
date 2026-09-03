const prompt = require('prompt-sync')();
let n = +prompt("Nombre : ");
for (let i = 1; i <= 10; i++){
    console.log(n + " X " + i + " = " + (n * i));
}