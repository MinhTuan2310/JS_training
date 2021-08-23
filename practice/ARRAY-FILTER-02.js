function findNumbers(numberList) {
  if(!Array.isArray(numberList) || numberList.length <= 1) return [];

  return numberList.reduce((acc, value, index) => {
    if(numberList[index + 1] > numberList[index]) {
      acc.push(numberList[index + 1]);
    }

    return acc;
  },[])
}

console.log(findNumbers([1]));
console.log(findNumbers([2,5,3,7,9,7,9]));