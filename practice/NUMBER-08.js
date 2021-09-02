export function isDivisibleBy10(n) {
  if (n < 10 || n >= 1000000) return false;

  const totalDigit = n
  .toString()
  .split("")
  .reduce((acc, value) => Number(acc) + Number(value));

  return totalDigit % 10 === 0;
}

// function  hasTwoDigitsWithSum(n, sum) {
//   if(typeof n !== 'number' || n <= 9 || n > 1000000) return false;

//   let remaining = n;
//   let temp = 0;
//   let total = 0;
//   while (remaining > 0) {
//     let digit = remaining % 10;
//     total = total + digit;
    
//     remaining = Math.trunc(remaining / 10);
//   }

//   return total % 10 === 0 ;
// }

// console.log(hasTwoDigitsWithSum(55));