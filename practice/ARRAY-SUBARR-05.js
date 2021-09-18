// function findAllIncreasingSubArr(numberList) {
//   if(!Array.isArray(numberList) || numberList.length < 2) return -1;

//   const subArrList = [];
//   let subArr = [numberList[0]];
  
//   for (let i = 1; i < numberList.length; i++) {
//     const prev = numberList[i - 1];
//     const curr = numberList[i];

//     if(prev >= curr) {
//       if(subArr.length >= 2) subArrList.push(subArr);

//       subArr = [curr];
//       continue;
//     }

//     subArr.push(curr);
    
//     if(subArr.length > 1 && i === numberList.length - 1) {
      
//       subArrList.push(subArr);
//     }
//   }
  
//   return subArrList;
// }

// function findMaxSumArray(numberList) {
//   if(!Array.isArray(numberList) || numberList.length === 0) return 0;

//   // return findAllIncreasingSubArr(numberList)
//   // .map(subArray => subArray.reduce((sum, number) => sum + number))
//   // .sort((a,b) => (a - b))
//   // .pop();

//   let maxSum =  Number.MIN_SAFE_INTEGER;
//   for(const subArray of findAllIncreasingSubArr(numberList)) {
//     let sumSubArray = subArray.reduce((a,b) => a + b);

//     maxSum = Math.max(maxSum, sumSubArray);
//   }

//   return maxSum;
// }

// console.log(findMaxSumArray([]));
// console.log(findMaxSumArray([1, 2, 3]));
// console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));
// console.log(findMaxSumArray([1, -1, 3, 0, 10, 20,-30]));
// console.log(findMaxSumArray([1,2,3,4,2,1,3,5,7]));





function findMaxSumArray(numberList) {
  if(!Array.isArray(numberList) || numberList.length < 2) return 0;

  const subArrList = [];
  let subArr = [numberList[0]];
  let globalSum = Number.MIN_SAFE_INTEGER;
  
  for (let i = 1; i < numberList.length; i++) {
    const prev = numberList[i - 1];
    const curr = numberList[i];

    if(prev >= curr) {
      if(subArr.length >= 2) {
        subArrList.push(subArr);

        const currSum = subArr.reduce((a,b) => a + b);
        globalSum = Math.max(globalSum, currSum)
      }

      subArr = [curr];
      continue;
    }

    subArr.push(curr);
    
    if(subArr.length > 1 && i === numberList.length - 1) {
      subArrList.push(subArr);

      globalSum = Math.max(globalSum, subArr.reduce((a,b) => a + b));
    }
  }
  
  return globalSum;
}

console.log(findMaxSumArray([]));
console.log(findMaxSumArray([1, 2, 3]));
console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));
console.log(findMaxSumArray([1, -1, 3, 0, 10, 20,-30]));
console.log(findMaxSumArray([1,2,3,4,2,1,3,5,7]));