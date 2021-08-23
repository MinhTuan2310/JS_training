function countWords(wordList, n) {
  if(!Array.isArray(wordList) || n <= 0) return false;

  return wordList.reduce((acc, value) => {
    if(value.length >= n) {
      acc += 1;
    }

    return acc;
  }, 0)
}

console.log(countWords(['easy', 'frontent'], 4));
console.log(countWords(['easy', 'frontent'], 5));
console.log(countWords(['easy', 'frontent'], 10));