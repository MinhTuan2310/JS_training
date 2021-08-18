const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
 ];
 
function hasAlice(studentList) {
  if(!Array.isArray(studentList)) return false;

  return studentList.some(obj => (obj.name.toLowerCase() === "alice" && obj.gender === "female"));
}

console.log(hasAlice(studentList)); // true