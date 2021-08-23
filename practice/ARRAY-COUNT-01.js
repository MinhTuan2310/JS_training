function countPositiveEvenNumbers(numberList) {
  if(!Array.isArray(numberList)) return false;

  return numberList.reduce((acc, value) => {
    if(value % 2 === 0 && value > 0) {
      acc++;
    }

    return acc;
  }, 0);
}

console.log(countPositiveEvenNumbers([-2, -1]));
console.log(countPositiveEvenNumbers([-2, -1, 1 ,2 ,4]));

function countPositiveEvenNumbersV2(numberList) {
  if(!Array.isArray(numberList)) return false;

  let output = 0;
  for( let i = 0; i < numberList.length; i++) {
    if(numberList[i] % 2 === 0 && numberList[i] > 0) {
      output += 1;
    }
  }

  return output;
}

console.log(countPositiveEvenNumbersV2([-2, -1]));
console.log(countPositiveEvenNumbersV2([-2, -1, 1 ,2 ,4]));