function findLongestWord(wordList) {
 if(!Array.isArray(wordList)) return undefined;
 

 const output =  wordList
 .filter (number => !number.includes(" ") && number.length <= 5)
 .sort((a, b) => b.length - a.length)
 .find(item => item);

 return output !== undefined ? output : '';
}

console.log(findLongestWord([]));
console.log(findLongestWord(["super", "cool"]));
console.log(findLongestWord(["super", "super cool"]));
console.log(findLongestWord(["super cool", "tu", "supe", "tuan"]));