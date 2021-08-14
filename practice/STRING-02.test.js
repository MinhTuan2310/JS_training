import { statisticsWords, statisticsWordsV2 } from './STRING-02';

describe('statisticsWords()', () => {
  test('should return invalid params when input invalid', () => {
    expect(statisticsWords(1)).toBe("invalid param");
    expect(statisticsWords("")).toBe("invalid param");
    expect(statisticsWords("     ")).toBe("invalid param");
  });

  test('should return obj when input valid', () => {
    expect(statisticsWords('hi hi hi')).toEqual({hi: 3});
    expect(statisticsWords('hi hi hi')).toEqual({hi: 3});
    expect(statisticsWords('hi hi hi ho')).toEqual({hi: 3, ho: 1});
  });
});

describe('statisticsWordsV2()', () => {
  test('should return invalid params when input invalid', () => {
    expect(statisticsWordsV2(1)).toBe("invalid param");
    expect(statisticsWordsV2("")).toBe("invalid param");
    expect(statisticsWordsV2("     ")).toBe("invalid param");
  });

  test('should return obj when input valid', () => {
    expect(statisticsWordsV2('hi hi hi')).toEqual({hi: 3});
    expect(statisticsWordsV2('hi hi hi')).toEqual({hi: 3});
    expect(statisticsWordsV2('hi hi hi ho')).toEqual({hi: 3, ho: 1});
  });
});