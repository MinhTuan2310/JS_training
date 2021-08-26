function remove(arr, k, n) {
  if(!Array.isArray(arr)) return false;

  if(k < 0 || k >= arr.length) return arr;
  if(!n) return [];
  
  let newArr = [...arr];
  newArr.splice(k,n);

  return newArr;
}

console.log(remove([1,2,3], -1, -10));
console.log(remove([1,2,3], 3, 10));
console.log(remove([1,2,3], 1, 2));
console.log(remove([1,2,3], 0));