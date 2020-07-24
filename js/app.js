'use strict';


var answerOne = prompt('What a day, no?');
console.log(answerOne);

if (answerOne === true) {
  console.log('Make sure to take time for yourself');
} else {
  console.log('Glad to hear you\'re well');
}

var myBool = true;
var anotherBool = false;
var thirdBool = true;

if (myBool && thirdBool) {
  console.log('myBool and thirdBool are true');
}
else if (myBool || anotherBool) {
  console.log('myBool OR anotherBool is true');
}
else if (thirdBool) {
  console.log('thirdBool is true');
}