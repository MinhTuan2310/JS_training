function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList)) return false;

  return numberList
  .reverse()
  .find( number => number < 0 && number % 2 !== 0)
}

console.log(findLastNegativeOdd([-1, -3, -5]));
console.log(findLastNegativeOdd([1, 3, 5]));