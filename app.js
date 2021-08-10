// random from [0,n];
// function randomNumber (n) {
//  if( n < 0 ) return -1;

//  return Math.round(Math.random() * n);
// }

// console.log(randomNumber(5));

// random [a,b];
// function randomNumberInRange(a,b) {
//   if (a >= b) return -1;
//   const randomNumber = Math.round(Math.random() * (b-a));

//   return  randomNumber + a;
// }
// console.log(randomNumberInRange(5,10));

// area of rectangle
// function calcAreaofRec (a,b) {
//   if(a <= 0 || b <= 0 ) return -1;

//   const result  = a * b;

//   return result;
// }
// console.log(calcAreaofRec(4,10));

// // ood/even
// function isOddOrEven(n) {
//   if(isNaN(n)) return -1;

//   if(n % 2 === 0) return "Odd";
//   return "Even";
// }
// console.log(isOddOrEven(6));

// // divisbile by 5
// function isDivByFive(n) {
//   if(isNaN(n)) return -1;

//   return n % 5 === 0;
// }
// console.log(isDivByFive(10));

// number is perfect square
// function isPerfectSquareNumber(n) {
//   if(isNaN(n)) return -1;

//   return Math.sqrt(n) === parseInt(Math.sqrt(n));
// }
// console.log(isPerfectSquareNumber(9));

// covert hourse to seconds
// an hours = 3600s;
// function covertToSeconds (hours) {
//   if (hours < 0) return -1;
//   if (hours < 0) return 0;

//   const SECONDS_PER_HOUR = 3600;
//   return hours * SECONDS_PER_HOUR;
// }
// console.log(covertToSeconds(2));

// // given 3 numbers, find max
// function findMax(a,b,c) {
//   if( a === b || b === c || a === c) return -1;

//   let max = a;

//   if (max < b ) max =  b;
//   if (max < c) max = c;

//   return max;
 
// }
// console.log(findMax(7, 6 ,9));

// // given 3 numbers, find max even number
// function findEvenMax(a, b, c) {
//   if( a === b || b === c || a === c) return false;

//   // âm vô cùng
//   let max = Number.NEGATIVE_INFINITY;

//   if (a % 2 === 0 && a > max) max = a;
//   if (b % 2 === 0 && b > max) max = b;
//   if (c % 2 === 0 && c > max) max = c;
  
//   return max;

// };
// console.log(findEvenMax(1,9,10));

// get the ones of a number having 3 digits.

// [0,n)
// ones:  n %10;
// tens: Math.trunc(n % 100 / 10);
// hundreds: Math.trunc( n / 100);
// function getMaxDigit(n) {
//   if(n < 0 || n >= 1000) return -1;

//   const  theHundreds = Math.trunc( n / 100);
//   const  theTens = Math.trunc(n % 100 / 10);
//   const  theOnes = n % 10;

//   let max = theHundreds;

//   if (theTens > max) max = theTens;
//   if(theOnes > max) max = theOnes;

//   return max;
// }
// console.log(getMaxDigit());

// compare a between b;
// function compareNumber(a, b) {
  
//   if (a < b) return -1;
//   if(a > b) return 1;
//   return 0;

// }
// console.log(compareNumber(10, 11));

// isSymmetricNumber with 3digits;

// function isSymmetricNumber(n) {
//   if(n < 0 || n >= 1000) return -1;

//   const  theHundreds = Math.trunc( n / 100);
//   const  theTens = Math.trunc(n % 100 / 10);
//   const  theOnes = n % 10;

//   return (theHundreds === 0 && theTens === 0) || (theHundreds === 0 && theTens === theOnes) || (theHundreds !== 0 && theHundreds === theOnes);
// }
// console.log(isSymmetricNumber(373)); 

// write a function to transform a string:
// - the first letter in UPPERCASE
// - the rest in lowercase
// Eg: capitalize('easy FRontend') -> "Easy frontend"
// function UpperCaseFirstLetter (str) {
//   if(str.length <= 0) return -1;

//   const firstLetter = str[0].toUpperCase();
//   const otherLetter = str.slice(1).toLowerCase();

//   return `${firstLetter}${otherLetter}`;
// }
// console.log(UpperCaseFirstLetter("easy FRontEnd"));

// check if a string contains an email address with `@gmail.com` or not;
// function hasEmail (email) {
//   return email.includes("@gmail.com");
// }
// console.log(hasEmail("tuanle123@gmail.com"));

// create a function like text-truncate in CSS;
// function truncate(text, maxlength) {
//   if(text.length <= maxlength) return text;

//   const textTrucate = text.slice(0, maxlength-1);
//   return `${textTrucate}\u2026`;
// }
// console.log(truncate("easy frontend", 4));
// function removeVowel(str) {
//   let result = str;
  
//   const uVowel = str.indexOf("u");
//   const eVowel = str.indexOf("e");
//   const oVowel = str.indexOf("o");
//   const aVowel = str.indexOf("a");
//   const iVowel = str.indexOf("i");

//   if (uVowel < 0 && eVowel < 0 && oVowel < 0 && aVowel < 0 && iVowel < 0) return result; 
//   result = result.replace(result[uVowel], " ");
//   result = result.replace(result[eVowel], " ");
//   result = result.replace(result[oVowel], " ");
//   result = result.replace(result[aVowel], " ");
//   result = result.replace(result[iVowel], " ");

  
//   return result.split(" ").join("");

// }
// console.log(removeVowel("minh"));

// function formatSecondsV1(seconds) {
//   if(seconds < 0 || seconds >= 60) return -1;

//   if(seconds < 10) return `0${seconds}`;
//   return seconds.toString();
// }
// // console.log(formatSecondsV1(7));

// function formatSecondsV2(seconds) {
//   if(seconds < 0 || seconds >= 60) return -1;

//   result = `0${seconds}`;
//   return result.slice(-2);
// }
// console.log(formatSecondsV2(9));

// minutes = seconds / 60;
// hours = hours / 36000;
// const SECONDS_PER_HOUR = 3600;
// const SECONDS_PER_MIN = 60;

// function formatTime(sec) {
//   if (sec < 0 || sec > 86400) return -1;

//   let hours = "0" + Math.floor(sec / SECONDS_PER_HOUR);
//   let minutes = "0" + Math.floor((sec % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
//   let seconds = "0" + ((sec % SECONDS_PER_HOUR) % SECONDS_PER_MIN);

//   hours = hours.slice(-2);
//   minutes = minutes.slice(-2);
//   seconds = seconds.slice(-2);
  
//   return `${hours}:${minutes}:${seconds}`;
// }

// using indexOf()
// function isSecureUrlV1(url) {
//   return (url.indexOf("https") >= 0) || (url.indexOf("wss") >= 0);
// }
// console.log(isSecureUrlV1("wss://ezfrontend.com"));

// // using startsWith()
// function isSecureUrlV2(url) {
//   return (url.startsWith("https")) || url.startsWith("wss");
// }
// console.log(isSecureUrlV2("wss://ezfrontend.com"));

// function findSecret(code) {
  
//   return code.split("").filter(item => item !== item.toUpperCase()).join("");

// }
// console.log(findSecret("LEcodeMINHTUAN"));

// // using split
// function extractDomainV1(email) {
//   if(!email.includes("@")) return email;

//   return email.split("@")[1];
  
// }
// console.log(extractDomainV1("abc")); 

// using indexOf() and slice()
// function extractDomainV2(email) {
//   if(email.indexOf("@") < 0) return email;

//   let index = email.indexOf("@") + 1;
  
//   return email.slice(index);
// }
// console.log(extractDomainV2("abc"));

// function getFullName(first, last) {
//   let firstName = capitalize(first);
//   let lastName = capitalize(last);

//   return `${firstName} ${lastName}`.trim();
// }
// console.log(getFullName("tuan",''));

// function capitalize (string) {
//   if(!string) return "";

//   let firstLetter = string.slice(0,1).toUpperCase();
//   let otherLetter = string.slice(1).toLowerCase();

//   return `${firstLetter}${otherLetter}`;
// }

// const name = "tuan";
// const age = 28;
// const student = {
//   name,
//   age
// };

// console.log(student);
// const studentA = {name: 'Bob', math: 9};
// const studentB = cloneObject(studentA);
// function cloneObject(obj) {
//   let output = {};

//   for (let i in obj) {
//     output[i] = obj[i];
//   }

//   return output;
// }

// compare 2 objects
// const obj1 = {name: 'Bob', age: '20'};
// const obj2 = {name:' Alice', age: 18};
// function isEqual(obj1, obj2) {
//   return Object.keys(obj1).length === Object.keys(obj2).length;
// }
// console.log(isEqual(obj1, obj2));

// kiem tra ton tai: some every indexof lastindexof includes;
// function isEvenEveryMethod (array) {
//   if (!Array.isArray(array)) return false;

//   for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 !== 0 ) return false;
//   }
  
//   return true;
// }
// console.log(isEvenEveryMethod([2,4,5]));

// function isEvenSomeMethod (array) {
//   if (!Array.isArray(array)) return false;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) return true;
//   }

//   return false;
// }
// console.log(isEvenSomeMethod([1,2,3]));

// function cloneIndexOf (array, item, fromIndex) {
//   if (!Array.isArray(array)) return false;

//   if (arguments.length === 2) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === item) return i;
//     }
//     return -1;
//   }  
//   if (arguments.length === 3) {
//     for (let i = fromIndex; i < array.length; i++) {
//       if (array[i] === item) return i;
//     }
//     return -1;
//   }  
// }
// console.log(cloneIndexOf([1,2,2,3], 2, 2));

// function cloneLastIndexOf (array, item, fromIndex) {
//   if (!Array.isArray(array)) return false;

//   if (arguments.length === 2) {
//     for (let i = array.length - 1; i >= 0; i--) {
//       if (array[i] === item) return i;
//     }
//     return -1;
//   }  
//   if (arguments.length === 3) {
//     for (let i = fromIndex; i >= 0; i--) {
//       if (array[i] === item) return i;
//     }
//     return -1;
//   }  
// }
// console.log(cloneLastIndexOf([1,2,2,3], 2, 1));


// function findNumber(numberList, callbackFn) {
//   if(!Array.isArray(numberList)) return undefined;
  
//   for (let i = 0; i < numberList.length; i++) {
//     if(callbackFn(numberList[i]), i) return numberList[i];
//   }
//   return undefined;
// }
// function isEven(number) {
//   return number % 2 === 0;
// }
// function fisOdd(number) {
//   return number % 2 !== 0;
// }
// console.log(findNumber([2,5,3,8], isEven));

// function findIndex(numberList, callbackFn) {
//   if(!Array.isArray(numberList)) return undefined;
  
//   for (let i = 0; i < numberList.length; i++) {
//     if(callbackFn(numberList[i])) return i;
//   }
//   return undefined;
// }
// function isEven(number) {
//   return number % 2 === 0;
// }
// function isOdd(number) {
//   return number % 2 !== 0;
// }
// console.log(findIndex([1,1,3,4], isEven));

// function map(array, callbackFn) {
//   if(!Array.isArray(array) || typeof callbackFn !== "function") return undefined;

//   let output = [];

//   for(let i = 0; i < array.length; i++) {
//     output.push(callbackFn(array[i], i));
//   }

//   return output;
// }
// console.log(map([1,2,3,4], (item, index) => {
//   if(index % 2 === 0) return item + 1;
//   return item * 2;
// }));

// function filter(array, callbackFn) {
//   if(!Array.isArray(array) || typeof callbackFn !== "function") return undefined;

//   let output = [];

//   for(let i = 0; i < array.length; i++) {
//     if(callbackFn(array[i]))  output.push(array[i]);
//   }

//   return output;
// }
// console.log(filter([1,2,3,4], item => item > 1));

// function reduce(array, callbackFn, initialValue) {
//   if(!Array.isArray(array) || typeof callbackFn !== "function") {
//     throw new Error("Invalid paremeters");
//   }

//   if(arguments.length < 3) {
//     let output = array[0];
//     for (let i = 1; i < array.length; i++) {
//       output =  callbackFn(output, array[i]);
//     }
//     return output;
//   }

//   let output = initialValue;
//   for(let i = 0; i < array.length; i++) {
//     output = callbackFn(output, array[i]);
//   }
//   return output;
// }
// console.log(reduce([1,2,3], (initialValue, item) => initialValue + item, 0));

// print numbers: 1 -> 10;
// function printNumbers (number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// printNumbers(10);

// print even numbers [2,4,6,8,10]
// function printNumbers (number) {
//   for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
//   }
// }
// printNumbers(10);

// print even numbers but less than n
// function printNumbers (number) {
//   for (let i = 2; i <= 9; i += 2) {
//     console.log(i);
//   }
// }
// printNumbers(10);

// // write function to find max 
// function findMaxV1(array) {
//   if (!Array.isArray(array)) throw new Error("Invalid params");

//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if(max < array[i])  max = array[i];
//   }
//   return max;
// }
// console.log(findMaxV1([5,2,3,8]));

// function findMaxV2(array) {
//   if (!Array.isArray(array)) throw new Error("Invalid params");

//   let max = array[0];

//   array.forEach(item => {
//     if(max < item) max = item;
//   });

//   return max;
// }
// console.log(findMaxV2([5,2,3,8]));

// function findMaxV3(array) {
//   if (!Array.isArray(array)) throw new Error("Invalid params");

//   return array.reduce((max, item) => max < item ? item : max);
// }
// console.log(findMaxV3([5,2,3,8]));

// write a function to find the longest word
// function findLongestStringV1(array) {
//   if (!Array.isArray(array)) throw new Error("Invalid params");

//   let output = array[0].length;
  
//   for (let i = 1; i < array.length; i++) {
//     if(output < array[i].length) output = array[i].length;
//   }
//   return output;
// }
// console.log(findLongestStringV1(["tuan", "tu", "maidu"]));  

// function findLongestStringV2(array) {
//   if (!Array.isArray(array)) throw new Error("Invalid params");

//   let output = array[0].length;
  
//   array.forEach(item => {
//     if (output < item.length) output = item.length;
//   });
//   return output;
// }
// console.log(findLongestStringV2(["tuan", "tu", "maidu"]));

// function findLongestStringV3(array) {
//   if (!Array.isArray(array)) throw new Error("Invalid params");

//   return array.reduce((max, item) => max < item.length ? item.length : max, array[0].length);
// }
// console.log(findLongestStringV3(["tuan", "tu", "maiduty"]));

// using for...i
// function createArrayInRangeV1(a, b) {
//   if(a > b || a <= -100 || b >= 100 || arguments.length < 2)  throw new Error("Invalid params");
  
//   let output = [];
//   for (i = a; i <= b; i++) {
//       output.push(i);
//   }
//   return output;
// }
// console.log(createArrayInRangeV1(1, 10));

// function createArrayInRangeV2(a, b) {
//   if(a > b || a <= -100 || b >= 100 || arguments.length < 2) return -1;

//   return Array.from(Array(b-a+1), (item, index) => {
//     return index + a;
//   });
// }
// console.log(createArrayInRangeV2(-2, 7));

// Using loop from 2 to n - 1
// function isPrimeV1(n) {
//   if (n < 2 || n > 1000) return false;
//   if(n == 2) return true;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrimeV1(2));

// function isPrimeV2(n) {
//   if (n < 2 || n > 1000) return false;
//   if(n == 2) return true;

//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrimeV2(2));

// use for
// function getDivisorListV1(n) {
//   if (n < 1 || n > 1000) throw new Error("Invalid params");

  
//   if(arguments.length === 0) return [1];
  
//   let output = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) output.push(i);
//   }

//   return output;
// }
// console.log(getDivisorListV1());

// use array.from() + filter
// function getDivisorListV2(n) {
//   if(n < 1 || n > 1000) return -1;

//   if(arguments.length < 1) return [1];

//   return Array
//   .from(Array(n+1), (value, index) => index)
//   .filter(value => n % value === 0);
// }
// console.log(getDivisorListV2(6));

// use array.from(), forEach và sort;
// function getDivisorListV3(n) {
//   if(n < 1 || n > 1000) return -1;

//   if(arguments.length < 1 || n == 1) return [1];

//   let output = [];

//   const arrayList = Array
//     .from(Array(n+1), (value, index) => index)
//     .forEach(value => {
//       if (value <= Math.sqrt(n) && value > 0 && n % value === 0) {
//         output.push(value);
//         output.push(n / value);
//       }
//     });

//     return output.sort((a, b) => a - b);
// }
// console.log(getDivisorListV3(12));


// function isPerfectNumber(n) {
//   if(n <= 1 || n >= 1000 || arguments.length < 1) return false;

//   const perfectNumber = Array
//   .from(Array(n+1), (value, index) => index)
//   .filter(value => n % value === 0 && n !== value)
//   .reduce((acc, value) => acc + value);
  
//   return perfectNumber === n;
// }
// console.log(isPerfectNumber(10));

// check PrimeNumber in Array;
// function isPrimeV1(n) {
//   if (n < 2 || n > 1000) return false;
//   if(n == 2) return true;
  
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// // use some;
// function hasPrimeV5(numberList) {
//   if(!Array.isArray(numberList)) return false;

//   return numberList.some(value => isPrimeV1(value));
// }
// console.log(hasPrimeV5([6,6,8]));

// // use findindex
// function hasPrimeV4(numberList) {
//   if(!Array.isArray(numberList)) return false;

//   return numberList.findIndex(value => isPrimeV1(value)) >= 0;
// }
// console.log(hasPrimeV4([1,2,3]));

// // use find
// function hasPrimeV3(numberList) {
//   if(!Array.isArray(numberList)) return false;

//   return numberList.find(value => isPrimeV1(value)) >= 0;
// }
// console.log(hasPrimeV3([4,6,6]));

// // use forEach
// function hasPrimeV2(numberList) {
//   if(!Array.isArray(numberList)) return false;

//   let flag = false;

//   numberList.forEach(value => {
//     if(isPrimeV1(value))  flag = true;
//   });
  
//   return flag;
// }
// console.log(hasPrimeV2([4,4,10]));

// // use for 
// function hasPrimeV1(numberList) {
//   if(!Array.isArray(numberList)) return false;

//   let flag = false;

//   for (let i = 0; i < numberList.length; i++) {
//     if(isPrimeV1(numberList[i])) {
//       flag = true;
//     }
//   }
  
//   return flag;
// }
// console.log(hasPrimeV1(8));

// avg plus in array
// function calcAvgOfAllEvenNumbers(numberList) {
//   if(!Array.isArray(numberList)) return 0;
//   if(numberList.some(item => item <= 0) || numberList.length < 2 || numberList.findIndex(item => item % 2 === 0) < 0) return 0;

//   const arrayList = numberList.filter(item => item % 2 === 0);
    
//   return Math.round(arrayList.reduce((acc, item) => acc + item) / arrayList.length);
// }
// console.log(calcAvgOfAllEvenNumbers([1,3,5]));

// check perfectNumber in array;
// function isPerfectNumber(n) {
//   if(n <= 1) return false;

//   const perfectNumber = Array
//   .from(Array(n), (v,i) => i)
//   .filter(item => n % item === 0)
//   .reduce((acc, item) => acc + item);

//   return perfectNumber === n; 
// }
// for...i: return false if found number is not perfect
// function isAllPerfectNumbersV1(numberList) {
//   if(!Array.isArray(numberList) || numberList.some(item => item < 0) || numberList.length < 1) return false;

//   let flag = true;
  
//   for(let i = 0; i < numberList.length; i++) {
//     if(!isPerfectNumber(numberList[i])) flag = false;
//   }

//   return flag;
// }
// console.log(isAllPerfectNumbersV1([]));

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
// function isAllPerfectNumbersV2(numberList) {
//   if(!Array.isArray(numberList) || numberList.some(item => item < 0) || numberList.length < 1) return false;

//   const count =  numberList.reduce((acc, item) => {
//     if(isPerfectNumber(item)) return acc + 1;
//     return acc;
//   }, 0);
//   return count === numberList.length;

// }
// console.log(isAllPerfectNumbersV2([6, 28]));

// every
// function isAllPerfectNumbersV3(numberList) {
//   if(!Array.isArray(numberList) || numberList.some(item => item < 0) || numberList.length < 1) return false;

//   return numberList.every(item => isPerfectNumber(item));
// }
// console.log(isAllPerfectNumbersV3([6, 28]));

// f(i) f(i-1) + f(i+1)
// using for...i
// function transformNumbersV1(numberList) {
//   if(!Array.isArray(numberList)) return [];

//   let output = [];

//   if(numberList.length === 1) {
//     output.push(numberList[0]);
//     return output;
//   }
//   if(numberList.length === 0) return output;

//   for (let i = 0; i < numberList.length; i++) {
//     if(i === 0) output.push(numberList[i+1]);
//     if(i === numberList.length-1) output.push(numberList[i-1]);
//     if(i !== 0 && i !== numberList.length-1) output.push(numberList[i-1] + numberList[i+1]);
//   }
  
//   return output;
// }
// console.log(transformNumbersV1([9]));

// using forEach()
// function transformNumbersV2(numberList) {
//   if(!Array.isArray(numberList)) return [];

//   let output = [];

//   if(numberList.length === 1) {
//     output.push(numberList[0]);
//     return output;
//   }
//   if(numberList.length === 0) return output;

//   numberList.forEach((item, i) => {
//     if(i === 0) output.push(numberList[i+1]);
//     if(i === numberList.length-1) output.push(numberList[i-1]);
//     if(i !== 0 && i !== numberList.length-1) output.push(numberList[i-1] + numberList[i+1]);
//   });
  
//   return output;
// }
// console.log(transformNumbersV2([1,2,3,4]));

// using map()
// function transformNumbersV3(numberList) {
//   if(!Array.isArray(numberList)) return [];

//   let newList  = [...numberList];

//   if(newList.length <= 1) return newList;

//   return newList.map((item, i) => {
//     if(i === 0) return newList[i+1];
//     if(i === newList.length-1) return newList[i-1];
//     if(i !== 0 && i !== newList.length-1) return (newList[i-1] + newList[i+1]);
//   });
// }
// console.log(transformNumbersV3([1,2,3]));

// function removeVowel(str) {
//   if (typeof str !== 'string') return "invalid param";

//   const VowelList = ["u", "e", "o", "a", "i"];

//     return str
//     .split("")
//     .filter(item => !VowelList.includes(item))
//     .join("");
// }
// console.log(removeVowel(""));
