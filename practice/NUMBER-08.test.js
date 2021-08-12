import {isDivisibleBy10} from "./NUMBER-08";

describe('isDivisibleBy10()', () => {
  test('should return false when n <= 0 || n >= 1000000', () => {
    expect(isDivisibleBy10(0)).toBe(false);
    expect(isDivisibleBy10(-1)).toBe(false);
    expect(isDivisibleBy10(1000000)).toBe(false);
    expect(isDivisibleBy10(2000000)).toBe(false);
  });
  
  test('should return false when 1 <= n <= 9', () => {
    const numberList = Array.from({length: 10}, (v,i) => i);
    numberList.forEach(item => {
      expect(isDivisibleBy10(item)).toBe(false);
    })
  });

  test('should return true when n is div by 10 = 0', () => {
    expect(isDivisibleBy10(1234)).toBe(true);
    expect(isDivisibleBy10(1135)).toBe(true);
  });
});