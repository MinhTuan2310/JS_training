export function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList)) return false;

  return numberList.find(item => item % 2 !== 0 && item % 3 === 0) !== undefined;
}
// console.log(hasOddNumberDivisibleBy3([1,5,7]));
// console.log(hasOddNumberDivisibleBy3([1,9]));