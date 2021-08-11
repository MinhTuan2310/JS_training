export function isPrime(n) {
  if(n <= 1 || n >= 100000) return false;

  for (let i = 2; i < n; i++) {
    if(n % i === 0) return false;
  }

  return true;
}

export function isPrimeV2(n) {
  if(n <= 1 || n >= 100000) return false;

  const numberList =  Array
  .from({length: n }, (v, i) => i)
  .filter(item => item > 1)
  .some(item => n % item === 0);

  return !numberList;
}

export function isPrimeV3(n) {
  if(n <= 1 || n >= 100000) return false;

  const output =  Array
  .from({length: n }, (v, i) => i)
  .filter(item => item > 1)
  .find(item => n % item === 0);

  return output === undefined ? true : false;
}

export function isPrimeV4(n) {
  if(n <= 1 || n >= 100000) return false;

  const output =  Array
  .from({length: n }, (v, i) => i)
  .filter(item => item > 1)
  .findIndex(item => n % item === 0);

  return output === -1 ? true : false;
}