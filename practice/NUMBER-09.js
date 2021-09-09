// array solution
export function hasTwoDigitsWithSum(n, sum) {
  if(n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) return false;

  const numberList = n.toString().split("");
  const totalDigit = numberList
    .reduce((acc, value) => Number(acc) + Number(value));

  return numberList
    .some(item => totalDigit - item === sum);
}

// number solution
export function hasTwoDigitsWithSum(n, targetSum) {
  if(n <= 9 || n >= 1000000 || targetSum <= 0 || targetSum >= 19) return false;

  let remaining = n;
  let objectList = {};
  
  while(remaining > 0) {
    const number = remaining % 10;
    
    if(objectList[targetSum - number]) return true;

    objectList[number] = (objectList[number] || 0) + 1;

    remaining = Math.trunc(remaining / 10);
  }

  return false;
}
