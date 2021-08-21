function findSecondLargestNumber(numberList) {
  if(!Array.isArray(numberList)) return false;

  return numberList
    .sort((a, b) => a - b)
    [numberList.length - 2];
}

console.log(findSecondLargestNumber([1]));
console.log(findSecondLargestNumber([1, 2]));
console.log(findSecondLargestNumber([1, 2, 3, 4]));