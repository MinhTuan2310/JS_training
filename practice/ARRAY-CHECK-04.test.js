import { hasTruthy } from './ARRAY-CHECK-04';

describe('hasTruthy()', () => {
  test('should return false when input is not an array', () => {
    expect(hasTruthy("")).toBe(false);
    expect(hasTruthy(1)).toBe(false);
    expect(hasTruthy(true)).toBe(false);
  });

  test('should return true when arr includes truthy value', () => {
    expect((hasTruthy(['easy', 'frontend']))).toBe(true);
    expect((hasTruthy(['easy frontend', '']))).toBe(true);
  });

  test('should return false when arr includes falsy value', () => {
    expect(hasTruthy([])).toBe(false);
  });
});