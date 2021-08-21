const studentList = [
  {id: 1, name: 'Easy'},
  {id: 2, name: 'Frontend'}
];

function findStudentById(studentList, studentId) {
  if(!Array.isArray(studentList)) return false;

  return studentList.findIndex(obj => obj.id === Math.trunc(studentId));
}

console.log(findStudentById(studentList, 1));
console.log(findStudentById(studentList, 2));
console.log(findStudentById(studentList, 3));