 export function statisticsCharacters(str) {
  if (typeof str !== 'string' || str.trim().length === 0) return 'invalid param';

  const obj =  str
    .split("")
    .reduce((acc, value) => {     
      acc[value] = (acc[value] || 0) + 1;

      return acc;
    }, {});

  // check and covert " " to space;
  if(obj[" "]) {
    obj.space = obj[" "];
    delete obj[" "];
  }

  return obj;
}
console.log(statisticsCharacters("f b c d e f f"));