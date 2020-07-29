'use strict';

//greeting

var userName = prompt('Hey there, What\'s your name?').toUpperCase();
alert("Hey " + userName + " hope you\'re well today");
//console.log(userName);


{
  document.getElementById("welcome").innerHTML =
    "Hey " + userName + " hope you\'re well today";
}


//5 questions

var answerTwo = prompt('Do I like hiking?');
//console.log(answerTwo);

if (answerTwo === "Yes" || answerTwo === "Y") {
  alert('Yes! I love Hiking');
}else if (answerTwo === "No" || answerTwo === "N") {
  alert("I actually love Hiking");
}

var answerThree = prompt('Is reading one of my favorite hobbies?');
//console.log(answerThree);

if (answerThree === "Yes" || answerThree === "Y") {
  alert('I would live in a book if I could!');
}else if (answerThree === "No" || answerThree === "N") {
  alert('I do love to read.');
}

var answerFour = prompt('Do I love animals?');
//console.log(answerFour);

if (answerFour === "Yes" || answerFour === "Y") {
  alert('I do, I love them!');
}else if (answerFour === "No" || answerFour === "N") {
  alert('I do like animals.');
}

var answerFive = prompt('Is my favorite genre of music Polka?');
//console.log(answerFive);

if (answerFive === "Yes" || answerFive === "Y") {
  alert('Nope, I do love Wierd Al though.');
}else if (answerFive === "No" || answerFive === "N") {
  alert('Right, I couldn\'t pick just one though.');
}

var answerSix = prompt('Have I wasted untold hours of my life on video games?');
//console.log(answerSix);

if (answerSix === "Yes" || answerSix === "Y") {
  alert('YES! So many hours ');
}else if (answerSix === "No" || answerSix === "N") {
  alert('Yes, so many hours!');
}

//two new questions - not working

var userGuess;
var userGuessRight

while (userGuessRight) {

  userGuess = prompt('Guess a number between 1 and 10!');
  if (userGuess > 5 ) {
    userGuessRight = false;

  }
  else {
    alert('Try again');
    userGuessRight = false;
  }
}
alert('You got it!')









//
 /* if (answerOne === true) {
    console.log('Make sure to take time for yourself');
  } else {
    console.log('Glad to hear you\'re well');
  } */