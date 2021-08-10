// write a function to check if a number a positive even number, if yes return true. otherwise return false;

// function isPositiveNumber(n) {
//   let isValid = false;

//   if(Number(n)) {
//     if(n % 2 === 0 && n > 0) {
//      isValid = true;
//     }

//   return isValid;
//   }
// };

// function isPositiveNumber(n) {
//   if(Number(n)) {
//     return n % 2 === 0 && n > 0;
//   }
// };

// console.log(isPositiveNumber(-10));

// // write a fn to classify student.
// // receviem ark as a number , output as below.
// // mark > 8 => excellence;
// // 7 <= mark <= 8 => good;
// // 4 <= mark <= 6 => not good;
// // mark <= 4 => bad;

// function classifyStudent (score) {
//   if(isValidScore(score)) {
//     let result;

//   if (score > 8) {
//     result = "Excellence";
//     // otherwise score <= 8, no need add condition 
//   } else if (score >= 7 ){
//     result = "Good";
//   } else if (score >= 4 ) {
//     result = "Not Good";
//   } else
//     {result = "Bad"}

//   return result;
//   }

//   return "vui lòng nhập diểm từ 0 >= 10";
// }
// console.log(classifyStudent(10));

// function isValidScore (n) {
//   return n > 0 || n <= 10;
// }

// function getErrorMessage (errCode) {
//   const errorList = {
//     E01: "err1",
//     EO02: "err2",
//     EO3: "err3"
//   };

//   const message = errorList[errCode] || "other err";
//   return message;
// };


// console.log(getErrorMessage("123"));

function getTicketPrice(age) {
  //check age is valid ?
  if(age <= 0) return -1;
  
  // checking age
  if(age < 6 || age >= 70) return 0;
  if(age >= 6 && age <= 12) return "20.000 VND";
  else return "50000 VND";
  
}
