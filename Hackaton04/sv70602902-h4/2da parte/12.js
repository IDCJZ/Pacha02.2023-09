//Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
    //{ name: "Steve" },
    //{ name: "Mike" },
    //{ name: "John" }
  //]) ➞ ["Becky", "John", "Steve"]
  function getStudentNames(students) {
    return students.map(student => student.name);
}
const students = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ];
  const result = getStudentNames(students);
  console.log(result); // ["Steve", "Mike", "John"]
  