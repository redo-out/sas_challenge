const readline = require('readline');
const curr = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
curr.question("distance in KM ", (answer1) => { 
    curr.question("carburant in L ", (answer2) => {
        // console.log("Distance: " + answer1 + " KM");
        // console.log("Carburant " + answer2 + " litres");
        console.log("Consumation: ", ((answer2 / answer1) * 100));
        curr.close();
    });
});
