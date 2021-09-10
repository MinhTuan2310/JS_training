function sumAllDigits(numberList) {
  if (!Array.isArray(numberList)) return false;

  // return numberList
  // .join("")
  // .split("")
  // .reduce((sum, number) => sum + +number, 0);

  let totalSum = 0;
  numberList.forEach((number, index) => {
    let sum =  0;

    sum = number.toString().split("").reduce((a, b) => a + +b, 0);

    totalSum += sum;
  })

  return totalSum;
}
// console.log(sumAllDigits([]));
// console.log(sumAllDigits([4]));
// console.log(sumAllDigits([123, 4]));
console.log(sumAllDigits([12, 3]));
