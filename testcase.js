export function classifyStudent (n) {
  if (n < 0 || n > 10) return "Invalid mark!";

  if(n > 8) return "Excellence";
  if(n >= 7) return "Good";
  if(n >= 4) return "Not Good";

  return "Bad";
}
// console.log(classifyStudent(-1));

 export function getTicketPrice(age) {
  //check age is valid ?
  if(age <= 0 || age > 125) return -1;
  
  // checking age
  if(age < 6 || age >= 70) return 0;
  if(age >= 6 && age <= 12) return 20000;
  return 50000;
}

export function sayHello(languageCode) {
  const languageCodeMap = {
      en: 'Hello',
      vi: "Xin chào",
      fr: "Bonjour",
      cn: "Nǐn hǎo",
      ja: "Konnichiwa",
      ko: "Anyoung haseyo",
  }
  const language = languageCodeMap[languageCode] || "Hello";
  return language;
}

export function getTaxiCount(passsengersCount) {
  if (passsengersCount <= 0 || passsengersCount !== parseInt(passsengersCount)) return -1;
  
  const TAXI_7_SLOTS = 7;
   return Math.ceil(passsengersCount / TAXI_7_SLOTS);
}
// console.log(getTaxiCount(8));

export function getMaxDigit(n) {
  if(n < 0 || n >= 1000) return -1;

  const str = n.toString();
  let result = str[0];

  for (let i = 0; i <= str.length; i++) {
    if(result < str[i]) result = str[i];
  }

  return Number(result);
}

export function isSymmetricNumber(n) {
  if(n < 0 || n >= 1000) return -1;

  const  theHundreds = Math.trunc( n / 100);
  const  theTens = Math.trunc(n % 100 / 10);
  const  theOnes = n % 10;

  return (theHundreds === 0 && theTens === 0) || (theHundreds === 0 && theTens === theOnes) || (theHundreds !== 0 && theHundreds === theOnes);
}

export function removeVowel(str) {
  if (typeof str !== 'string') return "invalid param";

  const VowelList = ["u", "e", "o", "a", "i"];

    return str
    .split("")
    .filter(item => !VowelList.includes(item))
    .join("")
    .trim();
}
