'use strict';
var userName;


//greeting

function greeting() {
  userName = prompt('Hey there, What\'s your name?').toUpperCase();
  alert("Hey " + userName + " hope you\'re well today!");
  //console.log(userName);


  document.getElementById("welcome").innerHTML =

    "Hey " + userName + " hope you\'re doing well today!";
}
greeting();


//5 questions

function questionOne() {
  var answerTwo = prompt('Do I like hiking?');
  if (answerTwo === "yes" || answerTwo === "y")
    alert('Yes! I love Hiking');
  else if (answerTwo === "no" ||
    answerTwo === "n") {
    alert("I actually love Hiking");
  }
}

questionOne();


function questionTwo() {
  var answerThree = prompt('Is reading one of my favorite hobbies?');


  if (answerThree === "Yes" || answerThree === "Y") {
    alert('I would live in a book if I could!');

  } else if (answerThree === "No" || answerThree === "N") {
    alert('I do love to read.');

    "Hey " + userName + " hope you\'re well today";


  }
}


questionTwo();



function questionThree() {
  var answerFour = prompt('Do I love animals?');


  if (answerFour === "Yes" || answerFour === "Y") {
    alert('I do, I love them!');

  } else if (answerFour === "No" || answerFour === "N") {
    alert('I do like animals.');
  }
}


questionThree();



function questionFour() {
  var answerFive = prompt('Is my favorite genre of music Polka?');


  if (answerFive === "Yes" || answerFive === "Y") {
    alert('Nope, I do love Wierd Al though.');

  } else if (answerFive === "No" || answerFive === "N") {
    alert('Right, I couldn\'t pick just one genre though.');
  }
}

questionFour();


function questionFive() {
  var answerSix = prompt('Have I wasted untold hours of my life on video games?');


  if (answerSix === "Yes" || answerSix === "Y") {
    alert('YES! So many hours ');

  } else if (answerSix === "No" || answerSix === "N") {
    alert('Yes, so many hours!');
  }

  questionFive();


}



function guessingGame() {
  num = prompt("Guess a number between 1 and 10!");
  if (num < 5)
    alert("Too low");
  else if (num > 5)
    alert("Too High!");
  else alert("You got it!");
}

guessingGame();

var arrayGame = prompt('Guess one of my top four favorite places I\'ve visited.').toLowerCase();
var places = ['singapore', 'hawaii', 'dubai', 'france'];

for (var i = 0; i < 5; i++) {
  if (arrayGame === places[0] || arrayGame === places[1] || arrayGame === places[2] || arrayGame === places[3])
    arrayGame = alert('Yes, I loved it there. ');
} else if (i !== 6) {
  arrayGame = prompt('Nope, try again');
}

if (i === 5) {
  arrayGame = alert('My top four favorite places I\'ve visited are singapore, hawaii, dubai and france.');
}