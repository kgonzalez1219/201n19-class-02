'use strict';


var userName = prompt('Hey there, What\'s your name?');
alert("Hey " + userName + " hope you\'re well today");
//console.log(userName);


{
  document.getElementById("welcome").innerHTML =
    "Hey " + userName + " hope you\'re well today";
}



var answerTwo = prompt('Do I like hiking?');
//console.log(answerTwo);

if (answerTwo === "Yes" || "Y") {
  alert('Yes! I love Hiking');
}else if (answerTwo === "No" || "N") {
  alert("I actually love Hiking");
}

var answerThree = prompt('Is reading one of my favorite hobbies?');
//console.log(answerThree);

if (answerThree === "Yes" || "Y") {
  alert('I would live in a book if I could!');
}else if (answerThree === "No" || "N") {
  alert('I do love to read.');
}

var answerFour = prompt('Do I love animals?');
//console.log(answerFour);

if (answerFour === "Yes" || "Y") {
  alert('I do, I love them!');
}else if (answerFour === "No" || "N") {
  alert('I do like animals.');
}

var answerFive = prompt('Is my favorite genre of music Polka?');
//console.log(answerFive);

if (answerFive === "Yes" || "Y") {
  alert('Nope, I do love Wierd Al though.');
}else if (answerFive === "No" || "N") {
  alert('Right, I couldn\'t pick just one though.');
}

var answerSix = prompt('Have I wasted untold hours of my life on video games?');
//console.log(answerSix);

if (answerSix === "Yes" || "Y") {
  alert('YES! So many hours ');
}else if (answerSix === "No" || "N") {
  alert('Yes, so many hours!');
}

/*var userGuess;
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


var stuff = stuff Array(yes, yes, yes,yes);

for (var stuff = yes; stuff);







 /* if (answerOne === true) {
    console.log('Make sure to take time for yourself');
  } else {
    console.log('Glad to hear you\'re well');
  } */