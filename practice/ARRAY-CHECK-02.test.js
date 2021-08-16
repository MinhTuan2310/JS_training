import { hasOddNumberDivisibleBy3 } from './ARRAY-CHECK-02';

describe('hasOddNumberDivisibleBy3()', () => {
  test('should return false when input is not an array', () => {
    expect(hasOddNumberDivisibleBy3("", 5)).toBe(false);
    expect(hasOddNumberDivisibleBy3(6, 5)).toBe(false);
    expect(hasOddNumberDivisibleBy3({}, 5)).toBe(false);
  });

  test('should return true when number is a odd number and div by 3', () => {
    expect(hasOddNumberDivisibleBy3([1,9])).toBe(true);
  });

  test('should return false when number is not a Odd number or number not div by 3 > n', () => {
    expect(hasOddNumberDivisibleBy3([1,5,7])).toBe(false);
  });
});