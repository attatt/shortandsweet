// //create secret number
// var secretNumber = 4;
//
// //ask user for guess
//
//
// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);
//
// //check if guess is right
// if(guess) === secretNumber) {
//   alert("YOU GOT IT RIGHT");
// }
// // otherwise check if higher
// else if(guess) > secretNumber) {
//   alert("Too high, guess again");
// }
//
// else {
//   alert("Too low, guess again");
// }
// // otherwise, check if lower

// // ===========WHILE LOOPS=================
//
//
// var num = 1;
//
// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }
console.log("All numbers between -10 and 19");

var exOne = -10;

while (exOne <= 19) {
  console.log(exOne);
  exOne++;
}

console.log("All even numbers between 10 and 40");

var exTwo = 10;

while (exTwo <= 40) {
  console.log(exTwo);
  exTwo += 2;
}

console.log("All odd numbers between 300 and 333");

var exThree = 300;

while (exThree <= 333) {
  console.log(exThree + 1);
  exThree += 2;
}

console.log("All numbers divisible by 5 AND 3 between 5 and 50");

var exFour = 5;

while (exFour <= 50) {
  if(exFour % 5 === 0 && exFour % 3 === 0) {
  console.log(exFour);
}
  exFour++;

}

// another example

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("are we there yet?");
}
 alert("YAY!");
