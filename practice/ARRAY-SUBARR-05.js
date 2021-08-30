function findAllIncreasingSubArr(numberList) {
  if(!Array.isArray(numberList) || numberList.length < 2) return -1;

  const subArrList = [];
  let subArr = [];
  let max = 0;
  
  for(let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if(max === 0 || number > max) {
      max = number;
      subArr.push(max);
    }
    if((number < max || i === numberList.length - 1) && subArr.length >= 2) {
      subArrList.push(subArr);
      subArr = [];
      max = 0;
      if(number < numberList[i + 1] && i !== numberList.length - 1) { 
        subArr.push(number);
      }
    }
  }
  return subArrList;
}

function findMaxSumArray(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return 0;

  return findAllIncreasingSubArr(numberList)
  .map(subArray => subArray.reduce((sum, number) => sum + number))
  .sort((a,b) => (a - b))
  .pop();
}

console.log(findMaxSumArray([]));
console.log(findMaxSumArray([1, 2, 3]));
console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));