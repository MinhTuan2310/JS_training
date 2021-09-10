const studentList = [
  { id: 1, name: 'Alice', marks: { math: 8 } },
  { id: 2, name: 'Bob', marks: { math: 9 } },
 ];

 const studentList2 = [
  { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
  { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
 ]
 
function countStudents(studentList, avgMark) {
  if(!Array.isArray(studentList)) return false;

  return studentList.reduce((count, student, index) => {
    const markList = Object.values(student.marks);

    const sumMark = markList.reduce((a, b)=> a + b);
    const avgOfMark = sumMark / markList.length;

    if(avgOfMark >= avgMark) {
      count++;
    }

    return count;
  }, 0);
}

console.log(countStudents(studentList, 7));
console.log(countStudents(studentList2, 7));