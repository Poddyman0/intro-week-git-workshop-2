const wordList = require("./word_list.js");

// DO NOT CHANGE ANY CODE ABOVE THIS LINE
function firstThreeWords(wordList) {
    let threeWords = wordList.slice(0, 3);
    return threeWords;
}

function lastThreeWords(wordList) {
    
    let start = wordList.length - 3;
    let lastThreeWords = wordList.slice(start);
    return lastThreeWords;
}

function wordCount(wordList) {
    return wordList.length;
}

function longestWord(wordList){
    let currentWord = "";
    let currentWordLength = 0;
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > currentWordLength)
        currentWord = wordList[i];
        currentWordLength = wordList[i].length;
    }
    return currentWord;
}

function containsC (wordList) {
    const pattern = /\b\w*C\w*\b/g;
    const matches = wordList.match(pattern);
    const containsC = [...new Set(matches)];
    return containsC
}

function reversedWords(wordList) {
    let reversedWords = [];
    for (let i = 0; i < wordList.length; i++) {
      let reversedWord = '';
      for (let j = wordList[i].length - 1; j >= 0; j--) {
        reversedWord += wordList[i][j];
      }
      reversedWords.push(reversedWord);
    }
    return reversedWords;
  }

  function noVowels(wordList) {
  const words = fileContent.split(' ');
  return noVowels = words.filter(word => !/[aeiou]/i.test(word));
}

function repeatedLetters(wordList) {
const words = fileContent.split(' ');
return repeatedLetters = words.filter(word => /(.)\1/.test(word));
}

  console.log(reversedWords);

// Run this file by typing 'node advanced.js' in your terminal.
