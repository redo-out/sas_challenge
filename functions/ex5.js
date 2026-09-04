// const prompt = require('prompt-sync');

function additionnerTout(){
    // console.log(additionnerTout.length);
    // console.log(arguments[0]);
    return Array.from(arguments).reduce((a , b) => a + b , 0);
}
console.log(additionnerTout(10, 20, 30, 80));
