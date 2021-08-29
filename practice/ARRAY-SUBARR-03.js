function isSubArray(a, b) {
  if(!Array.isArray(a) || !Array.isArray(b)) return false;

  if(a.length === 0) return true;
  if(a.length > b.length) return false;

  return b.join('').includes(a.join(''));
}

console.log(isSubArray([], [1]));
console.log(isSubArray([1,2], [1]));
console.log(isSubArray([1], [1,2]));
console.log(isSubArray([1], [2]));
console.log(isSubArray([1,2], [2,3,4]));
console.log(isSubArray([1,2], [4,10,1,2,3]));