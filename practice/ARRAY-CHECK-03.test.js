import { hasEasyFrontend } from './ARRAY-CHECK-03';

describe('hasEasyFrontend()', () => {
  test('should return false when input is not an array', () => {
    expect(hasEasyFrontend("", 5)).toBe(false);
    expect(hasEasyFrontend(6, 5)).toBe(false);
    expect(hasEasyFrontend({}, 5)).toBe(false);
  });

  test('should return true when wordlist includes easy front end string', () => {
    expect((hasEasyFrontend(['easy', 'frontend']))).toBe(true);
    expect((hasEasyFrontend(['easy frontend', '']))).toBe(true);
  });

  test('should return false when wordlist not includes easy front end string', () => {
    expect(hasEasyFrontend(hasEasyFrontend(['easy', '']))).toBe(false);
  });
});