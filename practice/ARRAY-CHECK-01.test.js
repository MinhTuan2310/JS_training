import { hasEvenNumberGreaterThanN } from './ARRAY-CHECK-01';

describe('hasEvenNumberGreaterThanN()', () => {
  test('should return false when input is not an array', () => {
    expect(hasEvenNumberGreaterThanN("", 5)).toBe(false);
    expect(hasEvenNumberGreaterThanN(6, 5)).toBe(false);
    expect(hasEvenNumberGreaterThanN({}, 5)).toBe(false);
  });

  test('should return true when number in numberList > n', () => {
    expect(hasEvenNumberGreaterThanN([2,3,4,6], 5)).toBe(true);
  });

  test('should return false when numer is not in numberList or <= n ', () => {
    expect(hasEvenNumberGreaterThanN([2,3,4], 5)).toBe(false);
  });
});