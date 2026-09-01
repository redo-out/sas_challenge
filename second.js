
const readline = require('readline')
const curr = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
curr.question("Amount of money u want to convert: ", (answer) => {
    if (answer >= 1){
        console.log("currency in euro: " + (answer / 11));
    }
    else if (answer >= 0)
        console.log("value is negative or null");
    curr.close();
});