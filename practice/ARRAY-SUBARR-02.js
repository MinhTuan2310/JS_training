function findAllDecreasingSubArr(numberList) {
  if(!Array.isArray(numberList) || numberList.length < 3) return false;

  let subArr = [];
  let subArrList = [];
  let min = 0;

  for(let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if(min === 0 || number < min) {
      min = number;
      subArr.push(number);
    }
    if((number > min || i === numberList.length - 1) && subArr.length > 2) {
      subArrList.push(subArr);
      subArr = [];
      min = 0;
      if(number > numberList[i + 1] && i !== numberList.length - 1) {
        subArr.push(number);
      }
    }
  }

  return subArrList;
}
console.log(findAllDecreasingSubArr([3,2,1,15,10,5]));
console.log(findAllDecreasingSubArr([3,2,1,15,12,10,11]));
console.log(findAllDecreasingSubArr([1,2]));