export function hasTruthy(arr) {
  if(!Array.isArray(arr)) return false;

  return arr.findIndex(item => Boolean(item)) !== -1;
}