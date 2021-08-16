import { countURLs } from './STRING-05';

describe('countURLs()', () => {
  test('should return invalid params when input invalid', () => {
    expect(countURLs(1)).toBe("invalid param");
    expect(countURLs("")).toBe("invalid param");
    expect(countURLs("     ")).toBe("invalid param");
  });

  test('should return obj when input valid', () => {
    expect(countURLs("my website is: http://ezfrontend.com you can visit it")).toBe(1);
    expect(countURLs("tuanleminh@gm.com")).toBe(0);
    expect(countURLs("tleminh@gm.com")).toBe(0);
  });
});