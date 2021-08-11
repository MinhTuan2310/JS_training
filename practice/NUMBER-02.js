export function isDecreasingNumberV1(n) {
  if ( n < 10) return false;

  let remaining = n;
  let prevDigit = 0;

  while(remaining > 0) {
    let lastDigit  = remaining % 10;
    if(lastDigit <= prevDigit) return false;
    prevDigit = lastDigit;
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

export function isDecreasingNumberV2(n) {
  if ( n < 10) return false;

  const str = n.toString();
  for (let i = 1; i < str.length; i++) {
    if(str[i] >= str[i-1]) return false;
  }

  return true;
}