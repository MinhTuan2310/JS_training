function statisticsWords(str) {
  if(!typeof str === 'string') return "invalid params";

  
  return str
    .split(" ")
    .reduce((acc, value) => {
      if(acc[value]) {
         acc[value] = acc[value] + 1;
        } else {
        acc[value] = 1;
      }

      return acc;
    }, {})
}

console.log(statisticsWords("easy frontend easy easy frontend"));