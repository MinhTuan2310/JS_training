import { getDisplayedAddress } from './STRING-06';

describe('getDisplayedAddress()', () => {
  test('should return false when input is not a object', () => {
    expect(getDisplayedAddress(null)).toBe(false);
    expect(getDisplayedAddress([])).toBe(false);
    expect(getDisplayedAddress(8)).toBe(false);
    expect(getDisplayedAddress('abc')).toBe(false);
  });

  test('should return string when input valid', () => {
    expect(getDisplayedAddress({
      number: 123, 
      street: 'Nguyen Cong Tru', 
      ward: 'Ward 11', 
      district: 'Binh Thanh District', 
     })).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District');
  });
});