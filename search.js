// linear search
// function findIndex(numberList, target) {
//   if(!Array.isArray(numberList) || numberList.length === 0) return -1; //

//   for (let i = 0; i < numberList.length; i++) {
//     number = numberList[i];

//     if(number === target) return i;
//   }

//   return -1;
// }

// binary search
// function findIndex(numberList, target) {
//   if(!Array.isArray(numberList) || numberList.length === 0) return -1; 

//   let left = 0;
//   let right = numberList.length - 1;
//   const mid = left + Math.trunc((right - left) / 2);

//   if(numberList[mid] === target) return mid;

//   if (target > numberList[mid]) {
//     left = mid + 1;
//   } else {
//     right = mid - 1;
//   }

//   for (i = left; i <= right; i++) {
//     if(numberList[i] === target) return i;
//   }

//   return -1;
// }

// binary search with recursion


// function binarySearch(numberList, target, left, right) {

//   if (!Array.isArray(numberList) || numberList.length === 0) return -1;

//   // base case / termination point (required for recursion)
//   if (right < left) return -1;
//   const mid = left + Math.trunc((right - left) / 2);
//   if (numberList[mid] === target) return mid;

//   // search on the right part if target is greater than mid
//   if (target > numberList[mid]) {
//     return binarySearch(numberList, target, mid + 1, right);
//   }

//   // otherwise, try to search on the left part
//   return binarySearch(numberList, target, left, mid - 1);
//  }
 

// console.log(binarySearch([1,2,3,4,5], 2, 0, 4));


// function bubbleSort(numberList) {
//   if(!Array.isArray(numberList) || numberList.length === 0) return [];

//   for(let i = numberList.length - 1; i > 0; i--) {
//     for(let j = 0; j < i; j++) {
//       if(numberList[j] > numberList[j + 1]) {
//         let temp = numberList[j];
//         numberList[j] = numberList[j + 1];
//         numberList[j + 1] = temp;
//       }
//     }
//   }

//   return numberList;
// }

// console.log(bubbleSort([2,1,5,7,8,9]));

// function quickSort(numberList) {
//   if(numberList.length === 0 || !Array.isArray(numberList)) return [];


// }

// console.log(quickSort([1,2,4,8,7,6]));

