var prompt = require('prompt-sync')();

var n = prompt('Note? ');
if (n >= 10){
    console.log("Résultat : Admis");
}
if (n < 10 && n >= 0){
    console.log("Résultat : Non admis");
}
if (n < 0 || n > 20){
    console.log("Note invalid");
}