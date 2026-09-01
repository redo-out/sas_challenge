const player_name = "redouane";
let level = 999;
let age = 24;
let score = "Max";
const country = "Morocco";

if (age < 18)
    console.log("Access denied");
else {
    console.log("Hey " + player_name);
    console.log("Age: " + age);
    console.log("You've reached level: " + level);
    console.log("With a " + score + " score");
    console.log("In: " + country);
}