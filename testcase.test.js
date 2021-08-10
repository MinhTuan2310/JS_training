import { classifyStudent,  getTicketPrice, sayHello, getTaxiCount, getMaxDigit, isSymmetricNumber, removeVowel} from "./testcase";

describe('classifyStudent()', () => {
  test('should return Invalid mark! when n < 0', () => {
    const value = classifyStudent(-1);
    expect(value).toBe("Invalid mark!");
  });

  test('should return Invalid mark! when n > 10', () => {
    const value = classifyStudent(11);
    expect(value).toBe("Invalid mark!");
  });

  test('should return Invalid mark! when n > 8', () => {
    const value = classifyStudent(9);
    expect(value).toBe("Excellence");
  });
  test('should return Invalid mark! when n >= 7', () => {
    const value = classifyStudent(7);
    expect(value).toBe("Good");
  });
  test('should return Invalid mark! when n >= 4', () => {
    const value = classifyStudent(4);
    expect(value).toBe("Not Good");
  });
  test('should return Invalid mark! when n < 4', () => {
    const value = classifyStudent(3);
    expect(value).toBe("Bad");
  });
});

describe('getTicketPrice()', () => {
  test('should return -1 when result <= 0', () => {
    expect(getTicketPrice(0)).toBe(-1);
    expect(getTicketPrice(-1)).toBe(-1);
  });

  test('should return 0 when result < 6 || result >= 70', () => {
    expect(getTicketPrice(5)).toBe(0);
    expect(getTicketPrice(70)).toBe(0);
    expect(getTicketPrice(71)).toBe(0);
  });

  test('should return 20000 when result >= 6 && result <= 12', () => {
    expect(getTicketPrice(6)).toBe(20000);
    expect(getTicketPrice(7)).toBe(20000);
    expect(getTicketPrice(12)).toBe(20000);
    expect(getTicketPrice(11)).toBe(20000);
  });

  test('should return 50000 when result > 12 && result <= 69 ', () => {
    expect(getTicketPrice(13)).toBe(50000);
    expect(getTicketPrice(69)).toBe(50000);
  });
});

describe('sayHello()', () => {
  test('should return hello when input = en || empty input', () => {
    expect(sayHello()).toBe("Hello");
    expect(sayHello("en")).toBe("Hello");
  });

  test('should return hello when input = en || empty input', () => {
    expect(sayHello("vi")).toBe("Xin chào");
  });

  test('should return hello when input = en || empty input', () => {
    expect(sayHello("fr")).toBe("Bonjour");
  });

  test('should return hello when input = en || empty input', () => {
    expect(sayHello("cn")).toBe("Nǐn hǎo");
  });

  test('should return hello when input = en || empty input', () => {
    expect(sayHello("ja")).toBe("Konnichiwa");
  });

  test('should return hello when input = en || empty input', () => {
    expect(sayHello("ko")).toBe("Anyoung haseyo");
  });
});

describe('getTaxiCount()', () => {
  test('should return -1 when input < 0 || input = 0 || input != int', () => {
    expect(getTaxiCount(-1)).toBe(-1);
    expect(getTaxiCount(0)).toBe(-1);
    expect(getTaxiCount(1.5)).toBe(-1);
  });

  test('should return 1 when 1 <= input <= 7', () => {
    expect(getTaxiCount(1)).toBe(1);
    expect(getTaxiCount(7)).toBe(1);
  });
  
  test('should return 2 when 7 < input <= 14', () => {
    expect(getTaxiCount(14)).toBe(2);
    expect(getTaxiCount(8)).toBe(2);
  });
});

describe('getMaxDigit()', () => {
  test('should return -1 when input invalid', () => {
    expect(getMaxDigit(-1)).toBe(-1);
    expect(getMaxDigit(1000)).toBe(-1);
  });

  test('should return max when input valid', () => {
    expect(getMaxDigit(123)).toBe(3);
    expect(getMaxDigit(234)).toBe(4);
  });
});

describe('isSymmetricNumber()', () => {
  test('should return -1 when input invalid', () => {
    expect(isSymmetricNumber(-1)).toBe(-1);
    expect(isSymmetricNumber(1001)).toBe(-1);
  });

  test('should return true when input is a SymmetricNumber', () => {
    expect(isSymmetricNumber(1)).toBe(true);
    expect(isSymmetricNumber(11)).toBe(true);
    expect(isSymmetricNumber(111)).toBe(true);
    expect(isSymmetricNumber(121)).toBe(true);
  });

  test('should return false when input is not a SymmetricNumber', () => {
    expect(isSymmetricNumber(12)).toBe(false);
    expect(isSymmetricNumber(113)).toBe(false);
    expect(isSymmetricNumber(114)).toBe(false);
    expect(isSymmetricNumber(125)).toBe(false);
  });
});

describe('removeVowel()', () => {
  test('should return empty string when input = empty string', () => {
    expect(removeVowel("")).toBe("");
  });

  test('should return error mess when input invalid', () => {
    expect(removeVowel(5)).toBe("invalid param");
  });

  test('should return string without Vowel when input valid', () => {
    expect(removeVowel("tuan")).toBe("tn");
    expect(removeVowel("     tuan  ")).toBe("tn");
  });
});