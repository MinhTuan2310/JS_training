function sumAllDigits(numberList) {
  if (!Array.isArray(numberList)) return false;

  return numberList
  .join("")
  .split("")
  .reduce((acc, value) => acc + parseInt(value), 0);
}
console.log(sumAllDigits([]));
console.log(sumAllDigits([4]));
console.log(sumAllDigits([123, 4]));
console.log(sumAllDigits([1234, 55]));
