'use strict';

let cypher = {
    a : 2,
    b : 3,
    c : 4,
    d : 5
}

function decodeWord(word) {
  switch(word[0]) {
  case 'a':
    return word[cypher.a - 1];
  case 'b':
    return word[cypher.b - 1];
  case 'c':
    return word[cypher.c - 1];
  case 'd':
    return word[cypher.d - 1];
  default:
    return ' ';
  }
}


function decodeWords(words){
  // create an array of words
  return words
    .split(' ')
    .map(word => decodeWord(word))
    .join('');
}

let result = decodeWords('craft block argon meter bells brown croon droop');

console.log(result);