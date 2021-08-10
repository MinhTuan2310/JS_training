// bài 1 Tính S(n) = 1 + 2 + 3 + .. + n;
export function calcSnV1(n) {
  if(typeof n !== 'number') return false;
  if(n === 0) return 0;

  let output = 0;

  for (let i = 1; i <= n; i++) {
      output += i;
  }

  return output;
}


export function calcSnV2(n) {
  if(typeof n !== 'number') return false;
  if(n === 0) return 0;

  let output = 0;

  const numberList = Array.from(Array(n+1), (v,i) => i);
  numberList.forEach(number => {
    output += parseInt(number);
  })

  return output;
}

export function calcSnV3(n) {
  if(typeof n !== 'number') return false;
  if(n === 0) return 0;

  let output = 0;

  const numberList = Array.from(Array(n+1), (v,i) => i);

  return numberList.reduce((acc, item) => acc + item);
}
