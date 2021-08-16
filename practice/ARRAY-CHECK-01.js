export function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array.isArray(numberList)) return false;

  return numberList.some(item => item % 2 === 0 && item > n);
}
