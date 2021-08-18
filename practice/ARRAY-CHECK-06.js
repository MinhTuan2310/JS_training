const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
 ];
 

function  hasStudent(studentList, studentId) {
  if(!Array.isArray(studentList)) return false;

  return studentList.some(obj => obj.id === studentId);
}
console.log(hasStudent(studentList, 1)); // true
console.log(hasStudent(studentList, 3)); // false
console.log(studentList);
