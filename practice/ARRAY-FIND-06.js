function findLastPerfectSquare(numberList) {
  if(!Array.isArray(numberList)) return false;

  perfectSquareList = numberList.reduce ((acc, value) => {
    if (Math.sqrt(value) === parseInt(Math.sqrt(value))) {
      acc.push(value);
    }
    return acc;
  },[]);

  return perfectSquareList.length !== 0 ? perfectSquareList[perfectSquareList.length - 1] : undefined;
}

console.log(findLastPerfectSquare([2,3,5]));
console.log(findLastPerfectSquare([4, 16, 25, 36, 40]));
