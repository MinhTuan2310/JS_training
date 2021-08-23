const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 4 },
  { id: 3, name: 'John', math: 0 },
 ];
 
 function findAllStudents(studentList) {
  if(!Array.isArray(studentList)) return false;

  return studentList.filter(student => student.math < 5);
 }

 console.log(findAllStudents(studentList));