function findSecondLargestNumber(numberList) {
  if(!Array.isArray(numberList)) return false;

  return numberList
    .sort((a, b) => b - a)
    [1];
}

console.log(findSecondLargestNumber([1]));
console.log(findSecondLargestNumber([1, 2]));
console.log(findSecondLargestNumber([6, 1, 7, 3, 4]));