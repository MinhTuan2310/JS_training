export function statisticsCharacters(str) {
  if (typeof str !== 'string' || str.trim().length === 0) return 'invalid param';

  const obj =  str
    .split("")
    .reduce((acc, value) => {     
      if(acc[value]) {
        acc[value] += 1;
      } else {
        acc[value] = 1
      }
      return acc;
    }, {});
  // check and covert " " to space;
  if(obj[" "]) {
    obj.space = obj[" "];
    delete obj[" "];
  }

  return obj;
}
console.log(statisticsCharacters("a b c "));