export function isSymetricNumber(n) {
  if (n <= 1 || n >= 1000000) return false;

  const numberStr = n.toString();

  return (numberStr.length === 1) || (numberStr.length === 2 && numberStr[0] === numberStr[1]) || (numberStr.length === 3 && numberStr[0] === numberStr[2]) || (numberStr.length === 5 && numberStr[1] === numberStr[3] && numberStr[0] === numberStr[4]);
}
