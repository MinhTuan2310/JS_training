function sumAllMinDigits(numberList) {
  if(!Array.isArray(numberList)) return false;

  return numberList.reduce((acc, value) => {
    let newArr = value.toString().split("").sort((a, b) => a - b);
    
    return acc + Number(newArr[0]);
  }, 0);
}

console.log(sumAllMinDigits([]));
console.log(sumAllMinDigits([123]));
console.log(sumAllMinDigits([123, 532]));