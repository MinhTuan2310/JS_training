export function isIncreasingNumberByDistance(n,x) {
  if (n <= 0 || n >= 1000000 || x <= 0 || x >= 5 ) return false;
  
  const str = n.toString();
  for ( let i = 1; i < str.length; i++) {
    if (str[i] <= str[i-1] || Number(str[i-1]) + x !== Number(str[i])) return false;
  }

  return true;
}

export function isIncreasingNumberByDistanceV2(n,x) {
  if (n <= 0 || n >= 1000000 || x <= 0 || x >= 5 ) return false;
  
  let remaining = n;
  let previousDigit = 10;
  while(remaining > 0) {
    let lastDigit = remaining % 10;
    if(lastDigit >= previousDigit || (previousDigit !== 10 && lastDigit + x !== previousDigit)) return false;
    previousDigit = lastDigit;
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

