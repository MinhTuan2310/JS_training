import {calcSnV1, calcSnV2, calcSnV3} from "./01-01-calcSn";

describe('calcSnV1()', () => {
  test('should return false when input is invalid', () => {
    expect(calcSnV1("1")).toBe(false);
    expect(calcSnV1({})).toBe(false);
    expect(calcSnV1([])).toBe(false);
  });
  test('should return 0 when input = 0', () => {
    expect(calcSnV1(0)).toBe(0);
  });
  test('should return Sum(n) when input is valid', () => {
    expect(calcSnV1(3)).toBe(6);
    expect(calcSnV1(4)).toBe(10);
  });
});

describe('calcSnV2()', () => {
  test('should return false when input is invalid', () => {
    expect(calcSnV2("1")).toBe(false);
    expect(calcSnV2({})).toBe(false);
    expect(calcSnV2([])).toBe(false);
  });
  test('should return 0 when input = 0', () => {
    expect(calcSnV2(0)).toBe(0);
  });
  test('should return Sum(n) when input is valid', () => {
    expect(calcSnV2(3)).toBe(6);
    expect(calcSnV2(4)).toBe(10);
  });
});

describe('calcSnV3()', () => {
  test('should return false when input is invalid', () => {
    expect(calcSnV3("1")).toBe(false);
    expect(calcSnV3({})).toBe(false);
    expect(calcSnV3([])).toBe(false);
  });
  test('should return 0 when input = 0', () => {
    expect(calcSnV3(0)).toBe(0);
  });
  test('should return Sum(n) when input is valid', () => {
    expect(calcSnV3(3)).toBe(6);
    expect(calcSnV3(4)).toBe(10);
  });
});
