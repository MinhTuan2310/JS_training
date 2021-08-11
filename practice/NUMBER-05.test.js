import { isPerfectSquare } from './NUMBER-05';

describe('isPerfectSquare()', () => {
  test('should return false when n <= 0 || n > = 100000 ', () => {
    expect(isPerfectSquare(0)).toBe(false);
    expect(isPerfectSquare(-1)).toBe(false);
    expect(isPerfectSquare(100000)).toBe(false);
    expect(isPerfectSquare(100001)).toBe(false);
  });
  test('should return false when output is not a perfect number', () => {
    expect(isPerfectSquare(2)).toBe(false);
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(7)).toBe(false);
    expect(isPerfectSquare(5)).toBe(false);
  });
  test('should return true when output is a perfect number', () => {
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(25)).toBe(true);
    expect(isPerfectSquare(36)).toBe(true);
  });
});