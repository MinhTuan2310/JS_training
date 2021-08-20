

function hasFibonaciNumber(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList
    .some(item => createFibonaciNumberV2().indexOf(item) !== -1)
}

console.log(hasFibonaciNumber([4, 6, 7])); // false
console.log(hasFibonaciNumber([0,1,2,3,4,5])); //true
console.log(hasFibonaciNumber([89])); // true

// function createFibonaciNumberV1() {
  
//   let output = [0,1,1];
//   let fiboNumber = 0;

//   for( let i = 2; i < 100; i ++) {
//     fiboNumber = output[output.length - 1] + output[output.length - 2];
//     if(fiboNumber < 100) {
//       output.push(fiboNumber);
//     }
//   }

//   return output;
// }
// console.log(createFibonaciNumberV1());

function createFibonaciNumberV2() {

  const numberList = Array.from({length: 100}, (v,i) => i);
 
  return numberList.reduce((acc, value, index) => {
    if(acc[acc.length - 1] + acc[acc.length - 2] === value) {
      acc.push(value);
    }
    return acc;
  }, [0,1,1]);
}