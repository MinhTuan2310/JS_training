function  sumEvenNumbers(numberList) {
  if(!Array.isArray(numberList)) return false;

  return numberList
    .reduce((acc, value, index) => {
      if(value % 2 === 0 && index !== 0 && value > numberList[index - 1]) {
        acc = acc + value;
      }
      
      return acc;
    }, 0);
}
console.log(sumEvenNumbers([1,2,3,4,5,8,6]));
console.log(sumEvenNumbers([-10, -4, 2, 8, 5]));
console.log(sumEvenNumbers([2, 8 ,5, 4]));