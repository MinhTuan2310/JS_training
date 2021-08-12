import { isSymetricNumber } from './NUMBER-07';

describe('isSymetricNumber()', () => {
  test('should return false when n <= 0  || n >= 1000000', () => {
    expect(isSymetricNumber(1)).toBe(false);
    expect(isSymetricNumber(0)).toBe(false);
    expect(isSymetricNumber(1000000)).toBe(false);
    expect(isSymetricNumber(2000000)).toBe(false);
  });

  test('should return false when n is not a symetric number', () => {
    expect(isSymetricNumber(1234)).toBe(false);
    expect(isSymetricNumber(123)).toBe(false);
    expect(isSymetricNumber(344555)).toBe(false);
    expect(isSymetricNumber(543635)).toBe(false);
    expect(isSymetricNumber(12312)).toBe(false);
  });

  test('should return true when n is a symetric number', () => {
    expect(isSymetricNumber(12321)).toBe(true);
    expect(isSymetricNumber(23432)).toBe(true);
    expect(isSymetricNumber(45654)).toBe(true);
  });
});