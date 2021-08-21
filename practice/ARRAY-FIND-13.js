const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 }
 },
  { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
  { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
  { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 }
 },
];

function findStudent(studentList) {
  if(!Array.isArray(studentList)) return false;

  return studentList
  .find(student => 
    Object
    .values(student.marks)
    .filter(mark => mark >= 5)
    .length === 2
  );
}

console.log(findStudent(studentList));