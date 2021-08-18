function hasFalsy(arr) {
  if(!Array.isArray(arr)) return false;

  return arr.some(item => {
    if (!Boolean(item)) return true;
  });
}
console.log(hasFalsy([]));
console.log(hasFalsy([false, '']));
console.log(hasFalsy([false, 123]));
console.log(hasFalsy(['easy', 123]));