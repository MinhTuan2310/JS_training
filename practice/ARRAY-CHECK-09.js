function isIncreasingNumberList(numberList) {
  if(!Array.isArray(numberList) || numberList.length < 2) return false;

  return numberList.reduce((output, number, index) => {
    if(numberList[index + 1] <= numberList[index]) {
      output = false;
    }
    return output;
  }, true);
}
console.log(isIncreasingNumberList([1,1]));
console.log(isIncreasingNumberList([1,3,2,4]));
console.log(isIncreasingNumberList([2,1]));