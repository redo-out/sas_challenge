const prompt = require('prompt-sync')();
let n = +prompt('N = ');
let somme;
for (let i = 1; i <= n; i++){
    somme = n *(( n + 1)/2)
}
console.log(somme);