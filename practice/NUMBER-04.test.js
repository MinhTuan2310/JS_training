import { isPrime, isPrimeV2, isPrimeV3, isPrimeV4} from './NUMBER-04';

describe('isPrime()', () => {
  test('should return false when n <= 0 || n >= 100000 ', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(100000)).toBe(false);
  });

  test('should return false when n is not a prime number ', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(8)).toBe(false);
  });

  test('should return true when n is  a prime number ', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
  });

});

describe('isPrimeV2()', () => {
  test('should return false when n <= 0 || n >= 100000 ', () => {
    expect(isPrimeV2(0)).toBe(false);
    expect(isPrimeV2(100000)).toBe(false);
  });

  test('should return false when n is not a prime number ', () => {
    expect(isPrimeV2(1)).toBe(false);
    expect(isPrimeV2(10)).toBe(false);
    expect(isPrimeV2(12)).toBe(false);
    expect(isPrimeV2(8)).toBe(false);
  });

  test('should return true when n is  a prime number ', () => {
    expect(isPrimeV2(7)).toBe(true);
    expect(isPrimeV2(11)).toBe(true);
    expect(isPrimeV2(3)).toBe(true);
    expect(isPrimeV2(5)).toBe(true);
  });

});

describe('isPrimeV3()', () => {
  test('should return false when n <= 0 || n >= 100000 ', () => {
    expect(isPrimeV3(0)).toBe(false);
    expect(isPrimeV3(-1)).toBe(false);
    expect(isPrimeV3(100000)).toBe(false);
    expect(isPrimeV3(100001)).toBe(false);
  });

  test('should return false when n is not a prime number ', () => {
    expect(isPrimeV3(1)).toBe(false);
    expect(isPrimeV3(10)).toBe(false);
    expect(isPrimeV3(12)).toBe(false);
    expect(isPrimeV3(8)).toBe(false);
  });

  test('should return true when n is  a prime number ', () => {
    expect(isPrimeV3(7)).toBe(true);
    expect(isPrimeV3(11)).toBe(true);
    expect(isPrimeV3(3)).toBe(true);
    expect(isPrimeV3(5)).toBe(true);
  });

});

describe('isPrimeV4()', () => {
  test('should return false when n <= 0 || n >= 100000 ', () => {
    expect(isPrimeV4(0)).toBe(false);
    expect(isPrimeV4(-1)).toBe(false);
    expect(isPrimeV4(100000)).toBe(false);
    expect(isPrimeV4(100001)).toBe(false);
  });

  test('should return false when n is not a prime number ', () => {
    expect(isPrimeV4(1)).toBe(false);
    expect(isPrimeV4(10)).toBe(false);
    expect(isPrimeV4(12)).toBe(false);
    expect(isPrimeV4(8)).toBe(false);
  });

  test('should return true when n is  a prime number ', () => {
    expect(isPrimeV4(7)).toBe(true);
    expect(isPrimeV4(11)).toBe(true);
    expect(isPrimeV4(3)).toBe(true);
    expect(isPrimeV4(5)).toBe(true);
  });

});