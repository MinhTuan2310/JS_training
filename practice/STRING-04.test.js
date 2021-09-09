import { countEmails } from './STRING-04';

describe('countEmails()', () => {
  test('should return invalid params when input invalid', () => {
    expect(countEmails(1)).toBe("invalid param");
    expect(countEmails("")).toBe("invalid param");
    expect(countEmails("     ")).toBe("invalid param");
  });

  test('should return number of emails correctly when input valid', () => {
    expect(countEmails("tuanleminh@gmail.com")).toBe(1);
    expect(countEmails("tuanleminh@gm.com")).toBe(0);
    expect(countEmails("tleminh@gm.com")).toBe(0);
    expect(countEmails("my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn")).toBe(3);
  });
});