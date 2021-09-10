function  sumEvenNumbers(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return false;

  // return numberList
  //   .reduce((acc, value, index) => {
  //     if(value % 2 === 0 && index !== 0 && value > numberList[index - 1]) {
  //       acc = acc + value;
  //     }
      
  //     return acc;
  //   }, 0);

  let sum = 0;

  for(let i = 1; i < numberList.length; i++) {
    const number = numberList[i];

    if(number === Math.max(number, numberList[i - 1]) && number % 2 === 0) {
      sum += number;
    }
  }

  return sum;
}
console.log(sumEvenNumbers([1,2,3,4,5,8,6]));
console.log(sumEvenNumbers([-10, -4, 2, 8, 5]));
console.log(sumEvenNumbers([2, 8 ,5, 4]));