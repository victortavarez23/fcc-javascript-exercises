const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const min = 1;
const max = 5;

// REINFORCE: Inclusive random number formula
// (max - min + 1) ensures BOTH extremes (1 and 5) are reachable
// Without +1, max possible is 4.9999 → Math.floor → 4 (never reaches 5)
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber);

// REINFORCE: let vs const
// const doesn't allow reassignment — since selectedFortune changes, it needs let
// Declared without a value because we don't know which fortune it gets yet
let selectedFortune;

// REINFORCE: Use the right variable in conditions
// We compare randomNumber (the number), not selectedFortune (which is a string)
if (randomNumber == 1) {
    // REINFORCE: Assign selectedFortune inside each block
    // This is where we KNOW which fortune applies — so we assign AND log
    selectedFortune = fortune1;
    console.log(selectedFortune);
} 
else if (randomNumber == 2) {
    selectedFortune = fortune2;
    console.log(selectedFortune);
}
else if (randomNumber == 3) {
    selectedFortune = fortune3;
    console.log(selectedFortune);
}
else if (randomNumber == 4) {
    selectedFortune = fortune4;
    console.log(selectedFortune);
}
// REINFORCE: else takes no condition and no semicolon
// else = "in all other cases" — no need for (randomNumber == 5)
else {
    selectedFortune = fortune5;
    console.log(selectedFortune);
} 

