const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
 ];
 
function removeStudentById(studentList, studentId) {
 if(!Array.isArray(studentList) || studentList.length === 0) return false;

 if(!studentId) return studentList;

 const newArr = [...studentList];
 return newArr.reduce((output, student, index) => {
  if(student.id !== studentId) {
    output.push(student);
  } else {
    studentList.splice(index, 1);
  }

  return output;
 }, []);
}

// console.log(removeStudentById(studentList, 1));
// console.log(studentList);
console.log(removeStudentById(studentList, 1));
console.log(studentList);


