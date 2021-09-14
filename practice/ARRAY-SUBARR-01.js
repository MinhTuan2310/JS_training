function findIncSubArr(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArrList = [];
  let subArr = [numberList[0]];

  for(let i = 1; i < numberList.length; i++) {
    let curr = numberList[i];
    let prev = numberList[i - 1];

    // slice when curr <= prev
    if(curr <= prev) {
      if(subArr.length >= 2) subArrList.push(subArr);

      subArr = [curr];
      continue;
    }

    // processing
    subArr.push(curr);

    // slice when pointer at the end of array;
    if(subArr.length >= 2 && i === numberList.length - 1) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}

