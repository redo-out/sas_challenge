var prompt = require('prompt-sync')();

var n = prompt('Montant de la command : ');
const frais_de_livraison = 40;
if (n >= 500){
    console.log("Laivraison : Gratuite");
    console.log("Total a payer : " + n + " DH");
}
if (n < 500){
    let sum = parseInt(n) + frais_de_livraison;
    console.log("Livraison : " + frais_de_livraison + " DH");
    console.log("Total a payer : " + sum + " DH");
}