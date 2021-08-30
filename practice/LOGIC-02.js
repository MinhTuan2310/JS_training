function findMissingNumber(numberList, n) {
  if(!Array.isArray(numberList)) return false;

  output = 0;
  for (let count = 5; count <= n; count++) {
    if(!numberList.includes(count)) return output = count;
  }
}

console.log(findMissingNumber([5, 6, 8, 9, 10], 10));
console.log(findMissingNumber([5], 6));
console.log(findMissingNumber([5, 6, 8], 8));