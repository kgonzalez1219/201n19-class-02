'use strict';


var userName = prompt('Hey there, What\'s your name?');
console.log(userName);
{
  document.getElementById("welcome").innerHTML = 
  "Hey" + userName + "How are you?";
}



var answerTwo = prompt('Do I like hiking?');
console.log(answerTwo);

var answerThree = prompt('Is reading one of my favorite hobbies?');
console.log(answerThree);

var answerFour = prompt('Do I love animals?');
console.log(answerFour);

var answerFive = prompt('Is my favorite genre of music Polka?');
console.log(answerFive);

var answerSix = prompt('Have I wasted untold hours of my life on video games?');
console.log(answerSix);









if (answerOne === true) {
  console.log('Make sure to take time for yourself');
} else {
  console.log('Glad to hear you\'re well');
}

