// // Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2
export function calcSnV1(n) {
  if(typeof n !== 'number') return false;
  if(n === 0) return 0;

  let output = 0;

  for (let i = 1; i <= n; i++) {
      output += Math.pow(i,2);
  }

  return output;
}


export function calcSnV2(n) {
  if(typeof n !== 'number') return false;
  if(n === 0) return 0;

  const numberList = Array.from(Array(n+1), (v,i) => i);

  let output = 0;
  numberList.forEach(number => {
    output += Math.pow(parseInt(number), 2);
  })

  return output;
}

export function calcSnV3(n) {
  if(typeof n !== 'number') return false;
  if(n === 0) return 0;

  let output = 0;

  const numberList = Array.from(Array(n+1), (v,i) => i);

  return numberList.reduce((acc, item) => acc + Math.pow(item, 2));
}
