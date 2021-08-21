function findFirstPositiveEven(numberList) {
  if(!Array.isArray(numberList)) return false;

  return numberList
    .find(number => number % 2 === 0);
}
console.log(findFirstPositiveEven([1, 4, 5]));
console.log(findFirstPositiveEven([1, 3, 5]));