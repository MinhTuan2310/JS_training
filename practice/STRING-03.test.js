import { statisticsCharacters } from './STRING-03';

describe('statisticsCharacters()', () => {
  test('should return invalid params when input invalid', () => {
    expect(statisticsCharacters(1)).toBe("invalid param");
    expect(statisticsCharacters("")).toBe("invalid param");
    expect(statisticsCharacters("     ")).toBe("invalid param");
  });

  test('should return obj when input valid', () => {
    expect(statisticsCharacters('aa')).toEqual({a: 2});
    expect(statisticsCharacters('aaa')).toEqual({a: 3});
    expect(statisticsCharacters('abc ')).toEqual({a: 1, b: 1, c: 1, space: 1});
  });
});