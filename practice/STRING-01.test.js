import { countWordsV1, countWordsV2 } from './STRING-01';

describe('countWordsV1()', () => {
  test('should return false when input invalid', () => {
    expect(countWordsV1(1)).toBe(false);
    expect(countWordsV1("")).toBe(false);
    expect(countWordsV1("    ")).toBe(false);
    expect(countWordsV1({})).toBe(false);
    expect(countWordsV1([])).toBe(false);
  });

  test('should return number of word when input valid', () => {
    expect(countWordsV1("tuan tu")).toBe(2);
    expect(countWordsV1("tuan mai tu")).toBe(3);
    expect(countWordsV1("tuan")).toBe(1);
  });
});

describe('countWordsV2()', () => {
  test('should return false when input invalid', () => {
    expect(countWordsV2(1)).toBe(false);
    expect(countWordsV2("")).toBe(false);
    expect(countWordsV2("    ")).toBe(false);
    expect(countWordsV2({})).toBe(false);
    expect(countWordsV2([])).toBe(false);
  });

  test('should return number of word when input valid', () => {
    expect(countWordsV2("tuan tu")).toBe(2);
    expect(countWordsV2("tuan mai tu")).toBe(3);
    expect(countWordsV2("tuan")).toBe(1);
  });
});