function generatePrimeNumbers(n) {
  if(n <= 0 || n >= 100) return false;

  const numberList = Array.from({length: n - 1}, (v, i) => i + 1);

  return numberList.filter(number => isPrime(number) && number !== 1)
}

console.log(generatePrimeNumbers(10));
console.log(generatePrimeNumbers(20));

function isPrime(n) {
  const numberList = Array.from({length: n - 1}, (v, i) => i + 1);

  return !numberList.some(number => n % number === 0 && number !== 1)
}