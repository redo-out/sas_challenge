const prompt = require('prompt-sync')();
let n = prompt('Nombre de participants : ');

for (let indx = 1; indx <= n; indx++){
    console.log('Participant ' + indx);
}