import {isIncreasingNumberV1,  isIncreasingNumberV2, } from './NUMBER-01';

describe('isIncreasingNumberV1()', () => {
  test('should return false when n < 10', () => {
    const arrayList = Array.from({length: 10}, (v, i) => i);
    arrayList.forEach(item => {
      expect(isIncreasingNumberV1(item)).toBe(false);
    });
  });

  test('should return false when n > 1000', () => {
    expect(isIncreasingNumberV1(1001)).toBe(false);
  });

  test('should return true when output is a isIncreasingNumber', () => {
    expect(isIncreasingNumberV1(123)).toBe(true);
    expect(isIncreasingNumberV1(123)).toBe(true);
    expect(isIncreasingNumberV1(456)).toBe(true);
    
  });

  test('should return false when output is not a isIncreasingNumber', () => {
    expect(isIncreasingNumberV1(122)).toBe(false);
    expect(isIncreasingNumberV1(133)).toBe(false);
    expect(isIncreasingNumberV1(183)).toBe(false);
    
  });
});

describe('isIncreasingNumberV2()', () => {
  test('should return false when n < 10', () => {
    const arrayList = Array.from({length: 10}, (v, i) => i);
    arrayList.forEach(item => {
      expect(isIncreasingNumberV2(item)).toBe(false);
    });
  });

  test('should return false when n > 1000000', () => {
    expect(isIncreasingNumberV2(2000000)).toBe(false);
  });

  test('should return true when output is a isIncreasingNumber', () => {
    expect(isIncreasingNumberV2(123)).toBe(true);
    expect(isIncreasingNumberV2(123)).toBe(true);
    expect(isIncreasingNumberV2(456)).toBe(true);
    
  });

  test('should return false when output is not a isIncreasingNumber', () => {
    expect(isIncreasingNumberV2(122)).toBe(false);
    expect(isIncreasingNumberV2(133)).toBe(false);
    expect(isIncreasingNumberV2(183)).toBe(false);
    
  });
});
