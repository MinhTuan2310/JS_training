function  findAllNumbers(numberList) {
  if(numberList.filter(number => number % 2 === 0).length === 0) return [];

  const firstEvenNumber = numberList.find(item => item % 2 === 0);
  const newArr = numberList.filter(number => number === firstEvenNumber);
  newArr.pop();

  return newArr;
}

console.log(findAllNumbers([1, 3, 5]));
console.log(findAllNumbers([1, 2, 5]));
console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4, 4]));