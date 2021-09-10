function insert(arr, newItem, k) {
  if(!Array.isArray(arr) || arr.length === 0) return false;

  if(k <= 0) {
    arr.unshift(newItem);
  }

  if(k > arr.length) {
    arr.push(newItem);
  }

  return arr;
}

console.log(insert([1,2,3], 0, -1));
console.log(insert([1,2,3], 4, 10));
console.log(insert([1,2,3], 2, 10));

