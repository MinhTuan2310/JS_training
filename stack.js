function createStack() {
  const stack = [];

  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }

  function getSize() {
    return stack.length;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function push(data) {
    stack.push(data);
  }

  function pop() {
    return stack.pop();
  }

  function print() {
    return stack;
  }

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
    print,
  };
}

const stack = createStack();


// function isValidBracketPairs(str) {
//   if( str.length === 0) return true;

//   const BRACKETS_OPEN = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   const BRACKETS_CLOSE = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };

//   for (let i = 0; i < str.length; i++) {
//     let digit = str[i];

//     if(BRACKETS_OPEN[digit]) {
//       stack.push(BRACKETS_OPEN[digit]);
//     }

//     if(BRACKETS_CLOSE[digit]) {
//       const bracketClose = stack.pop();
//      if(digit !== bracketClose) {

//        return false;
//      }
//     }
//   }

//   return stack.isEmpty();
// }

// console.log(isValidBracketPairs('(a+b) * (c+d)'));
// console.log(isValidBracketPairs('(a+b)'));
// console.log(isValidBracketPairs('(a+b) * (c[1'));

