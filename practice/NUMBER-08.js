export function isDivisibleBy10(n) {
  if (n < 10 || n >= 1000000) return false;

  const totalDigit = n
  .toString()
  .split("")
  .reduce((acc, value) => Number(acc) + Number(value));

  return totalDigit % 10 === 0;
}
