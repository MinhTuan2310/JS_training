function generateNumberInRange(a, b) {
  if(a >= b) return [];

  return Array.from({length: (b - a) + 1}, (v, i) => i + a);
}

console.log(generateNumberInRange(1, 5));
console.log(generateNumberInRange(5, 7));
console.log(generateNumberInRange(7, 5));