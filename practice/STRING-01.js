export function countWordsV1(str) {
  if (typeof str !== 'string' || str.trim().length === 0) return false;

  return str
    .split(" ")
    .filter(item => item !== " ")
    .reduce((acc, value) => acc + 1, 0);
}
// console.log(countWords(""));

export function countWordsV2(str) {
  if (typeof str !== 'string' || str.trim().length === 0) return false;

  let count = 0;
  const wordList = str
    .split(" ")
    .filter(item => item !== " ")
  for (let i = 0; i < wordList.length; i++) {
    count++;
  }
  return count;
}