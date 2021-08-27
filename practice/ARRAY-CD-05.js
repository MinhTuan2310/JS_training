function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  
  const uniqueList = numberList.reduce((acc, number) => {
    let isChecked = numberList.filter(item => item === number).length;
    if(isChecked > 1) {
      acc.push(number);
    }
   return acc;
  }, []);

  return numberList.filter((number) => {
    if(!uniqueList.includes(number)) {
      return number;
    }
  });
}


console.log(removeDuplicatedNumbers([2,1,1,3,3]));
console.log(removeDuplicatedNumbers([1,2,1,3,4,5,5,5,6,6,7,1,7]));
console.log(removeDuplicatedNumbers([1,1,2,2,3]));


// function uniqueNumber(numberList, numberCheck) {
  
//   const count = numberList.reduce ((acc, number, i) => {
//     if(acc === number) {
//       acc = acc + 1;
//     } 

//     return acc;
//   }, numberCheck);

//   return count;
// }

// console.log(uniqueNumber([1,2,2,4,3,4], 1));
