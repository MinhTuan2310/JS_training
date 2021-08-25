function  countNumbersNotInB(a, b) {
  if(!Array.isArray(a) || !Array.isArray(b)) return false;

  return a.reduce((acc, value) => {
    if(!b.includes(value)) {
      acc += 1;
    }

    return acc;
  }, 0);
}

console.log(countNumbersNotInB([1, 2, 3], [4, 5]));
console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3]));
console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5]));