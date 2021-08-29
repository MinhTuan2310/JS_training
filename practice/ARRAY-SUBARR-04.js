function findAllPositiveEvenSubArr(numberList) {
  if(!Array.isArray(numberList)) return false;

  // let subArr = [];
  // let subArrList = [];

  // for (let i = 0; i < numberList.length; i++) {
  //   let number = numberList[i];

  //   if(number % 2 === 0 && number > 0) {
  //     subArr.push(number)
  //   } 
  //   if(number % 2 !== 0 || i === numberList.length - 1 || number < 0) {
  //     subArrList.push(subArr);
  //     subArr = [];
  //   }
  // }

  // return subArrList.filter(item => item.length > 0);

  // ver2 use reduce;
  let subArr = [];
  const output = numberList.reduce((subArrList, number, i) => {
    if(number % 2 === 0 && number > 0) {
      subArr.push(number);
    }
    if(number % 2 !== 0 || number < 0 || i === numberList.length - 1) {
      subArrList.push(subArr);
      subArr = [];
    }

    return subArrList;
  }, []);
  
  return output.filter(item => item.length > 0);
}

console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));