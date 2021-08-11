import { isDecreasingNumberV1,  isDecreasingNumberV2} from './NUMBER-02.js';

describe('isDecreasingNumberV1()', () => {
  test('should return false when n < 10 ', () => {
    const numberList = Array.from({lenghth: 10}, (v,i) => i);
    numberList.forEach(item => {
      expect(isDecreasingNumberV1(item)).toBe(false);
    })
  });

  test('should return true when output is a Decreasing Number', () => {
    const arrayList = [321, 543, 987, 9876];
    arrayList.forEach(item => {
      expect(isDecreasingNumberV1(item)).toBe(true);
    })
  });

  test('should return false when output is not a Decreasing Number', () => {
    const arrayList = [322, 546, 123, 9879];
    arrayList.forEach(item => {
      expect(isDecreasingNumberV1(item)).toBe(false);
    })
  });
});

describe('isDecreasingNumberV2()', () => {
  test('should return false when n < 10 ', () => {
    const numberList = Array.from({lenghth: 10}, (v,i) => i);
    numberList.forEach(item => {
      expect(isDecreasingNumberV2(item)).toBe(false);
    })
  });

  test('should return true when output is a Decreasing Number', () => {
    const arrayList = [321, 543, 987, 9876];
    arrayList.forEach(item => {
      expect(isDecreasingNumberV2(item)).toBe(true);
    })
  });

  test('should return false when output is not a Decreasing Number', () => {
    const arrayList = [322, 546, 123, 9879];
    arrayList.forEach(item => {
      expect(isDecreasingNumberV2(item)).toBe(false);
    })
  });
});