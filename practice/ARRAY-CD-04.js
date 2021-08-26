function insert(numberList, newNumber) {
  if(!Array.isArray(numberList)) return false;

  if(numberList.length === 0) {
    numberList.push(newNumber);
    return numberList;
  }
  
  const newArr = [...numberList];

  if(newArr.every(item => item < newNumber)) {
    numberList.push(newNumber);
    return numberList;
  }
  
  if(newArr.every(item => item > newNumber)) {
    numberList.unshift(newNumber);
    return numberList;
  }

  newArr.forEach((number, index) => {
    if(number >= newNumber) {
      numberList.splice(index, 0, newNumber);
    }
  });
    
  return numberList;
  }


console.log(insert([], 3));
console.log(insert([1,2,4], 3));
console.log(insert([1,2,3], 3));
console.log(insert([1,2,3], 4));
console.log(insert([3,4,5], 2));