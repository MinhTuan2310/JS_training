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
    stack.push(data)
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

  const bracketLeftList = ["(", "{", "["];
  const bracketRightList = [")", "}", "]"];

  
  const wordList =  str.split("");

  for(let j = 0; j < wordList.length; j++) {
    let word = wordList[j];

    if(bracketLeftList.includes(word)) {
      stack.push(word);
      stack.push(bracketRightList[bracketLeftList.indexOf(word)]);
    }

    if(bracketRightList.includes(word) && word === stack.getTop() && stack.getSize() === 2) {
      stack.pop();
      stack.pop();
    } 
  }
  return stack.print();
}

console.log(isValidBracketPairs('(a+b) * (c+d)'));
// console.log(isValidBracketPairs('(a+b)'));
// console.log(isValidBracketPairs('(a+b) * (c[1'));



