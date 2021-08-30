function statisticsNumbers(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return {};

  return numberList.reduce((obj, number, index) => {
    if(!obj[number]) {
      obj[number] = 1;
    } else {
      obj[number] +=  1;
    }

    return obj;
  }, {});
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
console.log(statisticsNumbers([1,3]));
console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
console.log(statisticsNumbers([]));