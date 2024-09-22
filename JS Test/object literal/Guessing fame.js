let maxIn = prompt("Enter the max Num: ");
let isWon = false;
while (isWon == false) {
    random_number = Math.floor(Math.random() * maxIn + 1);
    guess = prompt("guess the number");
    if (guess == "quit") {
        console.log("Game is quiting");
        break;
    }
    else if (guess == random_number) {
        console.log(`your guess is correct! Random num is ${random_number}  `);
        console.log("You won");
        isWon = true;
    }
    else {

        console.log(`your guess is wrong! Random num is ${random_number} `);
        isWon = false;
        console.log("You loose! Try again");
    }

} 
