import {hasTwoDigitsWithSum} from './NUMBER-09'

describe('hasTwoDigitsWithSum()', () => {
  test('should return false when n <= 9 || n >= 1000000', () => {
    expect(hasTwoDigitsWithSum(8,1)).toBe(false);
    expect(hasTwoDigitsWithSum(9,1)).toBe(false);
    expect(hasTwoDigitsWithSum(1000000,1)).toBe(false);
    expect(hasTwoDigitsWithSum(1000001,1)).toBe(false);
  });

  test('should return false when sum <= 0 || sum >= 19', () => {
    expect(hasTwoDigitsWithSum(123, 0)).toBe(false);
    expect(hasTwoDigitsWithSum(123, -1)).toBe(false);
    expect(hasTwoDigitsWithSum(123, 19)).toBe(false);
    expect(hasTwoDigitsWithSum(123,20)).toBe(false);
    expect(hasTwoDigitsWithSum(123,21)).toBe(false);
  });

  test('should return true when two digits with sum is equal to sum', () => {
    expect(hasTwoDigitsWithSum(123, 3)).toBe(true);
    expect(hasTwoDigitsWithSum(123, 5)).toBe(true);
    expect(hasTwoDigitsWithSum(123, 4)).toBe(true);
    expect(hasTwoDigitsWithSum(1708, 15)).toBe(true);
  });

  test('should return false when two digits with sum is not equal to sum', () => {
    expect(hasTwoDigitsWithSum(123, 9)).toBe(false);
    expect(hasTwoDigitsWithSum(123, 10)).toBe(false);
    expect(hasTwoDigitsWithSum(123, 11)).toBe(false);
  });
});