const studentList = [
  { id: 1, name: 'Alice', math: 9, english: 9 },
  { id: 2, name: 'Bob', math: 5, english: 5 },
  { id: 3, name: 'John', math: 5, english: 5 },
 ];
 
 function findLastStudentHavingMinAvg(studentList) {
  if(!Array.isArray(studentList)) return false;

  const minAvg = studentList.reduce((output, student) => {
    if(output > calcAvg(student.math, student.english)) {
      output = calcAvg(student.math, student.english);
    }
    
    return output;
  }, calcAvg(studentList[0].math, studentList[0].english));

  return studentList
    .reverse()
    .find(student => calcAvg(student.math, student.english) === minAvg);
 }

 function calcAvg(a,b) {
   return ( a + b ) / 2;
 }

 console.log(findLastStudentHavingMinAvg(studentList));