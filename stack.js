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


function isValidBracketPairs(str) {
  if( str.length === 0) return true;

  const BRACKET_OPEN = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const BRACKET_CLOSE = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    let digit = str[i];

    if(BRACKET_OPEN[digit]) {
      stack.push(BRACKET_OPEN[digit]);
    }

    if(BRACKET_CLOSE[digit]) {
      const bracketClose = stack.pop();
     if(digit !== bracketClose) {

       return false;
     }
    }
  }

  return stack.getSize() === 0;
}

console.log(isValidBracketPairs('(a+b) * (c+d)'));
console.log(isValidBracketPairs('(a+b)'));
console.log(isValidBracketPairs('(a+b) * (c[1'));



