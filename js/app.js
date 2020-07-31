'use strict';
var userName;
var score;

//greeting
function greeting() {
  userName = prompt('Hey there, What\'s your name?').toUpperCase();
  alert("Hey " + userName + " hope you\'re well today");
  //console.log(userName);

  
  document.getElementById("welcome").innerHTML =
  "Hey " + userName + " hope you\'re well today";
  
}





//5 questions
function questionGame() {
  score = 0;

  var answerTwo = prompt('Do I like hiking?').toLowerCase();
  //console.log(answerTwo);
  if (answerTwo === "Yes" || answerTwo === "Y") {
    alert('Yes! I love Hiking');
    score++;
  } else if (answerTwo === "No" || answerTwo === "N") {
    alert("I actually love Hiking");
  }

  var answerThree = prompt('Is reading one of my favorite hobbies?').toLowerCase();
  //console.log(answerThree);

  if (answerThree === "Yes" || answerThree === "Y") {
    alert('I would live in a book if I could!');
    score++;
  } else if (answerThree === "No" || answerThree === "N") {
    alert('I do love to read.');
  }

  var answerFour = prompt('Do I love animals?').toLowerCase();
  //console.log(answerFour);

  if (answerFour === "Yes" || answerFour === "Y") {
    alert('I do, I love them!');
    score++;
  } else if (answerFour === "No" || answerFour === "N") {
    alert('I do like animals.');
  }

  var answerFive = prompt('Is my favorite genre of music Polka?').toLowerCase();
  //console.log(answerFive);

  if (answerFive === "Yes" || answerFive === "Y") {
    alert('Nope, I do love Wierd Al though.');
    score++;
  } else if (answerFive === "No" || answerFive === "N") {
    alert('Right, I couldn\'t pick just one though.');
  }

  var answerSix = prompt('Have I wasted untold hours of my life on video games?').toLowerCase();
  //console.log(answerSix);

  if (answerSix === "Yes" || answerSix === "Y") {
    alert('YES! So many hours ');
    score++;
  } else if (answerSix === "No" || answerSix === "N") {
    alert('Yes, so many hours!');
  }
}

greeting();
questionGame();








//two new questions - not working
//var userGuess = 0;
///var userGuessRight = prompt('Guess a number between 1 and 10.');

//while (userGuess < 4) {
  //userGuess++;
  //if (userGuess === 4) {
  //  userGuessRight = alert('Nope, it\'s 5');
  //} else if (parseInt(userGuessRight) > 5) {
    //userGuessRight = prompt('Too high.');
  //} else if (parseInt(userGuessRight) < 5) {
    //userGuessRight = prompt('Too Low');
  //} else if (parseInt(userGuessRight) === 5) {
   // userGuessRight = alert('Yup');
   // score++
  //}
//
/* if (answerOne === true) {
   console.log('Make sure to take time for yourself');
 } else {
   console.log('Glad to hear you\'re well');
 } */