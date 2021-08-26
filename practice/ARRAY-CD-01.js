function insert(arr, newItem, k) {
  if(!Array.isArray(arr)) return false;

  if(k > arr.length) {
    arr.push(newItem);
  }else if(k <= 0) {
    arr.unshift(newItem);
  } else {
    arr.splice(k, 0, newItem);
  }

  return arr;
}

console.log(insert([1,2,3], 0, -1));
console.log(insert([1,2,3], 4, 10));
console.log(insert([1,2,3], 10, 2));

