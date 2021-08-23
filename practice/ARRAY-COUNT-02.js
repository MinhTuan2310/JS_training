function countNumbers(numberList) {
  if(!Array.isArray(numberList)) return false;

  return numberList.reduce((acc, value, index) => {
    if(value === numberList[numberList.length - 1]) {
      acc;
    }
    if(numberList[index] > numberList[index + 1]) {
      acc = acc + 1;
    }

    return acc;
  }, 0);
}

console.log(countNumbers([1,2,3]));
console.log(countNumbers([1,2,3,2,10,9,8,7,6]));