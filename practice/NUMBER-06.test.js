import { isPerfectNumber } from './NUMBER-06';

describe('isPerfectNumber()', () => {
  test('should return false when input invalid', () => {
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(0)).toBe(false);
    expect(isPerfectNumber(1000)).toBe(false);
  });

  test('should return false when input is not a perfect number', () => {
    expect(isPerfectNumber(5)).toBe(false);
    expect(isPerfectNumber(7)).toBe(false);
    expect(isPerfectNumber(11)).toBe(false);
  });
  test('should return false when input is not a perfect number', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
    expect(isPerfectNumber(496)).toBe(true);
  });
});