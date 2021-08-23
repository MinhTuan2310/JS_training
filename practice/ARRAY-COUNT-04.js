function countUniqueNumbers(numberList) {
  if(!Array.isArray(numberList)) return false;

  const newArr = numberList.reduce ((acc, number, i) => {
    if(!acc.includes(number)) {
      acc.push(number);
    }

    return acc;
  }, []);

  return newArr.length;
}

console.log(countUniqueNumbers([]));
console.log(countUniqueNumbers([1,1,1]));
console.log(countUniqueNumbers([1,2,3]));
console.log(countUniqueNumbers([1,2,2,3,1]));