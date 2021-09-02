export function hasTwoDigitsWithSum(n, sum) {
  if(n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;

  const numberList = n.toString().split("");
  const totalDigit = numberList
    .reduce((acc, value) => Number(acc) + Number(value));

  return numberList
    .some(item => totalDigit - item === sum);
}

