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


// const studentList = [
//   {id: 1, name: '    alice    '},
//   {id: 2, name: '   bod tran  '},
//   {id: 3, name: 'John    '}
// ];

// function capitalizeName(name) {
//   return name
//   .trim()
//   .toLowerCase();
// }

// function binarySearch(studentList, searchName) {
//   if(!Array.isArray(studentList) || studentList.length === 0 || arguments.length < 2 || searchName.trim().length === 0) return -1;
  
//   const configName = capitalizeName(searchName);

//   for (const student of studentList) {
//     student.name = capitalizeName(student.name);
//   }

//   let left = 0;
//   let right = studentList.length - 1;
//   let mid = left + Math.trunc((right - left) / 2);
  
//   if(studentList[mid].name === configName) return mid;

//   if(configName > studentList[mid].name) {
//     left = mid + 1;
//   } else {
//     right = mid - 1;
//   }

//   for (let i = left; i <= right; i++) {
//     if(studentList[i].name === configName) {
//       console.log(capitalizeName(studentList[i].name));
//       console.log(configName);
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(binarySearch(studentList, 'bod tran '));
// console.log(binarySearch(studentList, '    alice    '));
// console.log(binarySearch(studentList, '    john    '));
// console.log(binarySearch(studentList, '    bod tran    '));

// function bubbleSort(numberList) {
//   if(!Array.isArray(numberList) || numberList.length === 0) return [];

//   for(let i = numberList.length - 1; i > 0; i--) {
//     for(let j = 0; j < i; j++) {
//       if(numberList[j] < numberList[j + 1]) {
//         let temp = numberList[j];
//         numberList[j] = numberList[j + 1];
//         numberList[j + 1] = temp;
//       }
//     }
//   }

//   return numberList;
// }

// console.log(bubbleSort([1,2,3,4,7,6]));



// function partition(numberList, left, right) {
//   // console.log('partition', numberList.slice(left, right + 1));
 
//   const mid = left + Math.trunc((right - left) / 2);
//   const pivot = numberList[mid];
 
//   let i = left;
//   let j = right;
 
//   while (i <= j) {
//     // find the first item that greater than or equal pivot
//     while (numberList[i] > pivot) i++;
 
//     // find the first item that smaller than or equal pivot
//     while (numberList[j] < pivot) j--;
 
//     if (i < j) {
//       const temp = numberList[i];
//       numberList[i] = numberList[j];
//       numberList[j] = temp;
//     }
 
//     // NOTE: chỗ này khác trên video, 
//     // cần phải check i <= j thì mới tăng, 
//     // còn case i > j rồi thì ko tăng nữa
//     if (i <= j) {
//       // MUST HAVE, INF loop
//       i++;
//       j--;
//     }
//   }
 
//   return i;
// }

// function quickSort(numberList, left, right) {
//   // console.log('quick sort', numberList.slice(left, right + 1));
//   // base condition / termination point
//   if (left >= right) return numberList;
//   const pivotPosition = partition(numberList, left, right);
//   quickSort(numberList, left, pivotPosition - 1);
//   quickSort(numberList, pivotPosition, right);
//   return numberList;
//  }


