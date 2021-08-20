function isIncreasingNumberList(numberList) {
  if(!Array.isArray(numberList) || numberList.length < 2) return false;

  return numberList.reduce ((acc, value, index) => {
    if(numberList[index + 1] >= numberList[index]) {
      acc = false;
    }
    return acc;
  }, true)
}

console.log(isIncreasingNumberList([1,1]));
console.log(isIncreasingNumberList([1,2]));
console.log(isIncreasingNumberList([2,1]));