// function statisticsNumbers(numberList) {
//   if(!Array.isArray(numberList) || numberList.length === 0) return {};

//   return numberList.reduce((obj, number, index) => {
//     if(!obj[number]) {
//       obj[number] = 1;
//     } else {
//       obj[number] +=  1;
//     }

//     return obj;
//   }, {});
// }


// function  findMostFrequentNumber(numberList) {
//   if(!Array.isArray(numberList)) return 0;
  
//   const obj = statisticsNumbers(numberList);

//   const maxNumber = Object.values(obj).reduce((max, number, index) => {
//     if(max === 0 || number > max) {
//       max = number;
//     }

//     return max;
//   }, 0);

//   return +Object.keys(obj)
//   .find(key => obj[key] === maxNumber);
// }

// console.log(findMostFrequentNumber([1]));
// console.log(findMostFrequentNumber([1, 2, 3, 2]));
// console.log(findMostFrequentNumber([1, 2, 3, 2, 3, 3, 4, 4, 4, 4, 4]));
// console.log(findMostFrequentNumber([1, 2, 3, 2, 4]));


function getUniqueWords(sentence) {
  if(typeof sentence !== 'string' || !sentence.trim()) return [];

  return sentence
  .split(" ")
  .filter(word => word !== "")
  .reduce((newArr, word) => {
    if(!newArr.includes(word)) {
      newArr.push(word)
    }

    return newArr;
  }, []);
}

console.log(getUniqueWords("easy frontend easy but is    "));
console.log(getUniqueWords(""));