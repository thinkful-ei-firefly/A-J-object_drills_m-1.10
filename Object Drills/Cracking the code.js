'use strict';

let cypher = {
    a : 2,
    b : 3,
    c : 4,
    d : 5
}

function decodeWord(word) {
  let firstChar = word[0];
  let index = cypher[firstChar];
  if ( index === undefined) {
    return " "
  }
  else {
    return word[index - 1];
  }
  
}

function decodeWords(words){
  // create an array of words
  return words.split(' ') .map(word => decodeWord(word)).join('');
}

let result = decodeWords('craft block argon meter bells brown croon droop');

console.log(result);