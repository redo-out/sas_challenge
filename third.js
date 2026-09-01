const readline = require('readline')
const curr = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
curr.question("how many gb u got :", (answer) => {
    console.log("stockage: " + answer + " GB");
    console.log("Resultat: "+ (answer * 1024) + " MB");
    curr.close();
});