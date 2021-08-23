function generateFibonaci(n) {
  if(n <= 0 || n >= 1000) return false;

  const fibonaciList =  Array.from({length: n + 1}, (v, i) => i);

  return fibonaciList.reduce((output, value, index) => { 
    if(output[output.length - 1] + output[output.length - 2] === value) {
      output.push(value);
    }

    return output;
  }, [0,1]);
}
console.log(generateFibonaci(5));
console.log(generateFibonaci(10));