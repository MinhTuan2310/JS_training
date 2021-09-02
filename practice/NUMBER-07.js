export function isSymetricNumber(n) {
  if (n <= 1 || n >= 1000000) return false;

  return +n.toString().split("").reverse().join("") === n;
}

// console.log(isSymetricNumber());
