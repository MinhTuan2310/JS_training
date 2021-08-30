function findSumPair(numberList, targetSum) {
  if(!Array.isArray(numberList)) return [];

  let subArr = [];
  let total = 0;

  const output = numberList.reduce((subArrList, number, index) => {
    
      total += number;
      subArr.push(number);

    if((total === targetSum) && subArr.length === 2) {
      subArrList.push(subArr);
      subArr = [];
      total = 0;
    }

    return subArrList;
  }, []);

  return output.map(item => item.sort((a,b) => a - b));
}

console.log(findSumPair({}));
console.log(findSumPair([], 10));
console.log(findSumPair([1, 2], 2));
console.log(findSumPair([3, 2, 1, 4, 2, 3, 0, 5], 5));


