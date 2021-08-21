function findMinPositive(numberList) {
  if(!Array.isArray(numberList)) return undefined;

  return numberList
  .sort((a,b) => a - b)
  .find(number => number > 0 );
}

console.log(findMinPositive(6)); //un
console.log(findMinPositive([])); //un
console.log(findMinPositive([-1, -5])); //un
console.log(findMinPositive([-1, -5, 6, 2])); // 2