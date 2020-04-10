var RPS = ["Rock", "Paper,", "Scissors"];
var wins = 0;
var losses = 0;
var ties = 0;

console.log(Math.random());

// run this code 10 times
for (var turn = 0; turn < 10; turn++) {
  // randomNumber is a random number from 0-1 * length of array (creating 0-3)
  var randomNumber = Math.floor(Math.random() * RPS.length);

  // computerGuess is the randomNumber of the rps array
  var computerGuess = RPS[randomNumber];

  // use a prompt to get one of three values form the user
  var userChoice = prompt("Rock, Paper, or scissors?");

  // if the user's answer is one of three allowed then
  if (
    userChoice === "Rock" ||
    userChoice === "Scissors" ||
    userChoice === "Paper"
  ) {
    //if the user makes a winning move OR a winning move OR a winning move then
    if (
      (userChoice === "Rock" && computerGuess === "Scissors") ||
      (userChoice === "Paper" && computerGuess === "Rock") ||
      (userChoice === "Scissors" && computerGuess === "Paper")
    ) {
      // add 1 to wins and alert the player they won, and display number of wins
      wins++;
      alert("You win! You've won: " + wins + " times!");

      // unless, if the player makes a move that causes a tie then
    } else if (userChoice === computerGuess) {
      // add 1 to ties and alert the player they tied, and display number of ties
      ties++;
      alert("It's a tie! You've tied: " + ties + " times!");

      // otherwise the player had to have made a losing move, so then
    } else {
      // add 1 to losses and alert the player they lost, and display number of losses
      losses++;
      alert("You lose! You've lost: " + losses + " times!");
    }
  }
}
// Outside of for loop, after it has finished running, alert the player with total wins/losses/ties
alert(
  "Times won: " + wins + "\nTimes lost: " + losses + "\nTimes tied :" + ties
);

//First solution - takes longer and doesn't scale

// if (userChoice === "rock" && computerGuess === "rock") {
//   alert("it's a tie!");
// } else if (userChoice === "paper" && computerGuess === "paper") {
//   alert("it's a tie!");
// } else if (userChoice === "scissors" && computerGuess === "scissors") {
//   alert("it's a tie!");
// } else if (userChoice === "rock" && computerGuess === "scissors") {
//   alert("You win");
// } else if (userChoice === "rock" && computerGuess === "paper") {
//   alert("You lose!");
// } else if (userChoice === "paper" && computerGuess === "rock") {
//   alert("You win!");
// } else if (userChoice === "paper" && computerGuess === "scissors") {
//   alert("You lose!");
// } else if (userChoice === "scissors" && computerGuess === "rock") {
//   alert("You lose!");
// } else if (userChoice === "scissors" && computerGuess === "paper") {
//   alert("You Win!");
// }
