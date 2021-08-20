function isSymmetricList(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.join("") === numberList.reverse().join("");
}
console.log(isSymmetricList([]));
console.log(isSymmetricList([1]));
console.log(isSymmetricList([1, 2, ,2, 1]));
console.log(isSymmetricList([1, 2, 3]));