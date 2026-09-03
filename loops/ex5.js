const prompt = require('prompt-sync')();
let n1 = prompt("N = ");
let n2 = prompt("X = ");
let count = 0;

for (let indx = 1; (indx * n2) <= n1; indx++){
    console.log(indx * n2);
    count++;
}
// console.log(` le nombre total de multiples trouvés = ${count}`);
console.log("le nombre est = " + count);