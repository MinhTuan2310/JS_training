export function isPerfectSquare(n) {
  if (n <= 0 || n >= 100000) return false;

  return Math.sqrt(n) === parseInt(Math.sqrt(n));
}