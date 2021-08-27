function uniqueArray(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return -1;

  const uniqueList = numberList.reduce((acc, number) => {
    const isChecked = numberList.filter(item => item === number).length;
 

    if(isChecked > 1) {
      acc.push(number);
    }

    return acc;
  }, []);

  const notUniqueList = numberList.filter(number => {
    if(!uniqueList.includes(number) || number === 1) {
      return number;
    }
  });

  return notUniqueList.reduce((acc, number) => {
    if(!acc.includes(number)) {
      acc.push(number);
    }

    return acc;
  }, [])
}

console.log(uniqueArray([1, 1, 2, 2, 3]));
console.log(uniqueArray([1, 1, 1, 1]));
console.log(uniqueArray([1, 2, 3]));