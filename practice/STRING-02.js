export function statisticsWords(str) {
  if(typeof str !== 'string' || str.trim().length <= 0) return "invalid param";

  
  return str
    .split(" ")
    .filter(item => item !== "")
    .reduce((statisticsWord, word) => {
        statisticsWord[word] = statisticsWord[word] !== undefined ? statisticsWord[word] + 1 : 1;

      return statisticsWord;
    }, {})
}

export function statisticsWordsV2(str) {
  if(typeof str !== 'string' || str.trim().length <= 0) return "invalid param";

  let output = {};
  let statisticsWord = str.split(" ").filter(item => item !== "");
  for (let i = 0; i < statisticsWord.length; i++) {
    if(output[statisticsWord[i]]) {
      output[statisticsWord[i]] += 1;
    } else {
      output[statisticsWord[i]] = 1;
    }
  }
  return output;
}