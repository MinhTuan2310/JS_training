const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 10 },
  { id: 3, name: 'John', math: 8 },
 ];
 
function findStudentHavingHighestMark(studentList) {
  if(!Array.isArray(studentList)) return false;

  const highestMark =  studentList.reduce((output, student, index) => {
    if(output < student.math) {
      output = student.math;
    }
    return output;
  }, studentList[0].math);

  return studentList.find(student => student.math === highestMark);
}

 console.log(findStudentHavingHighestMark(studentList));