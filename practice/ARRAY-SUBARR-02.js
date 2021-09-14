function findAllDecreasingSubArr(numberList) {
  if(!Array.isArray(numberList) || numberList.length < 3) return [];

  let subArr = [numberList[0]];
  let subArrList = [];

  for(let i = 1; i < numberList.length; i++) {
    let curr = numberList[i];
    let prev = numberList[i - 1];

    if(curr >= prev) {
      if(subArr.length >= 2) subArrList.push(subArr);

      subArr = [curr];
      continue;
    }

    subArr.push(curr);

    if(subArr.length >= 2 && i === numberList.length - 1) subArrList.push(subArr);
  }

  return subArrList;
}
console.log(findAllDecreasingSubArr([3,2,1,15,10,5]));
console.log(findAllDecreasingSubArr([3,2,1,15,12,10,11]));
console.log(findAllDecreasingSubArr([1,2]));