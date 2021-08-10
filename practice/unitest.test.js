import {isIncreasingNumberV1 } from './NUMBER-01';

describe('isIncreasingNumberV1()', () => {
  test('should return false when n < 10 && n > 1000', () => {
    const arrayList = Array.from({length: 10}, (v, i) => i);
    arrayList.forEach(item => {
      expect(item).toBe(false);
    });
  });
});