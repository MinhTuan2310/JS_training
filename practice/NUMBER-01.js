//// icreasingNumber : 123 234 456. from 10 < n <= 1000
export function isIncreasingNumberV1(n) {
  if (n < 10 || n > 1000) return false;

  let output = true;
  const array = n.toString().split("");

  array.forEach( (value, index) =>  {
    if( value >= array[index + 1])  output = false;
  }); 

  return output; 
}
// console.log(isIncreasingNumberV1(122)); 

export function isIncreasingNumberV2(n) {
  if (n < 10 || n > 1000000) return false;

  let remaining = n;
  let prevDigit = 10;

  while(remaining > 0) {
    let digit = remaining % 10;
    if(digit >= prevDigit) return false;
    prevDigit = digit;
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}
// console.log(isIncreasingNumberV2(455));

