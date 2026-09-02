var prompt = require('prompt-sync')();
var n = prompt('Note : ');

if (n >= 0 && n <= 9){
    console.log("Échec");
}
else if (n >= 10 && n <= 11.99){
    console.log("Mention : Passable");
}
else if (n >= 12 && n <= 13.99){
    console.log("Mention : Assez bien");
}
else if (n >= 14 && n <= 15.99){
    console.log("Mention : Bien");
}
else if (n >= 16 && n <= 17.99){
    console.log("Mention : Très bien");
}
else if (n >= 18 && n <= 20){
    console.log("Mention : Excellent");
}
else{
    console.log("Note invalid");
}