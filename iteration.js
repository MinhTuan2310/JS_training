const numberList = [1, 2, 3];

function createIterable(numberList) {
  let i = 0;

  return {
    [Symbol.iterator] () {
      return {
        next() {
          const result = {
            value: numberList[i],
            done: i > numberList.length - 1
          };

          i++;

          return result;
        }
      }
    }
  }
}
const iteration = createIterable(numberList);


for (const number of iteration) {
  console.log(number);
}
