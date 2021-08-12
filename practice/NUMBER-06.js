export function  isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;

   const perfectNumber =  Array
  .from({length: n}, (v,i) => i + 1)
  .filter(item => item < n && n % item === 0)
  .reduce((acc, item) => acc + item);

  return perfectNumber === n;
}
