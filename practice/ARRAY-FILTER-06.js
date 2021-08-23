function findAllNumbers(numberList) {
  if(!Array.isArray(numberList)) return false;
  
  return numberList.filter(number => number.toString()[0] % 2 !== 0);
}

console.log(findAllNumbers([1, 5, 6, 75, 8]));
console.log(findAllNumbers([234, 421, 123]));