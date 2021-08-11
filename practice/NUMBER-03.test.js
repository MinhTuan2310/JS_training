import { isIncreasingNumberByDistance, isIncreasingNumberByDistanceV2 } from './NUMBER-03';

describe('isIncreasingNumberByDistance()', () => {
  test('should return false when n <= 0 || n >= 1000000 ', () => {
    expect(isIncreasingNumberByDistance(-1, 5)).toBe(false);
    expect(isIncreasingNumberByDistance(1000000, 5)).toBe(false);
  });


  test('should false true when x <= 0 || x>= 5', () => {
    expect(isIncreasingNumberByDistance(123, 5)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 6)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 7)).toBe(false);
  });

  test('should return true when 0 < x < 5 && n is a increasing Number by distance x', () => {
    expect(isIncreasingNumberByDistance(123,1)).toBe(true);
    expect(isIncreasingNumberByDistance(135,2)).toBe(true);
    expect(isIncreasingNumberByDistance(147,3)).toBe(true);
    expect(isIncreasingNumberByDistance(159,4)).toBe(true);
  });

  test('should return false when n is not a increasing Number by distance x', () => {
    expect(isIncreasingNumberByDistance(123,2)).toBe(false);
    expect(isIncreasingNumberByDistance(135,3)).toBe(false);
    expect(isIncreasingNumberByDistance(147,1)).toBe(false);
    expect(isIncreasingNumberByDistance(159,3)).toBe(false);
  });

});

describe('isIncreasingNumberByDistanceV2()', () => {
  test('should return false when n <= 0 || n >= 1000000 ', () => {
    expect(isIncreasingNumberByDistanceV2(-1, 5)).toBe(false);
    expect(isIncreasingNumberByDistanceV2(1000000, 5)).toBe(false);
  });


  test('should false true when x <= 0 || x>= 5', () => {
    expect(isIncreasingNumberByDistanceV2(123, 5)).toBe(false);
    expect(isIncreasingNumberByDistanceV2(123, 6)).toBe(false);
    expect(isIncreasingNumberByDistanceV2(123, 7)).toBe(false);
  });

  test('should return true when 0 < x < 5 && n is a increasing Number by distance x', () => {
    expect(isIncreasingNumberByDistanceV2(123,1)).toBe(true);
    expect(isIncreasingNumberByDistanceV2(135,2)).toBe(true);
    expect(isIncreasingNumberByDistanceV2(147,3)).toBe(true);
    expect(isIncreasingNumberByDistanceV2(159,4)).toBe(true);
  });

  test('should return false when n is not a increasing Number by distance x', () => {
    expect(isIncreasingNumberByDistanceV2(123,2)).toBe(false);
    expect(isIncreasingNumberByDistanceV2(135,3)).toBe(false);
    expect(isIncreasingNumberByDistanceV2(147,1)).toBe(false);
    expect(isIncreasingNumberByDistanceV2(159,3)).toBe(false);
  });

});