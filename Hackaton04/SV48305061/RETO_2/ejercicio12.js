/*Cree una función que tome una matriz de estudiantes y devuelva una matriz 
de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]

*/
function getStudentNames(estudiantes) {
    let names = [];
    for (let Student of estudiantes) {
      names.push(Student.name);
    }
    return names;
  }
  console.log(getStudentNames([   { name: "Steve" },
     { name: "Mike" },   { name: "John" } ]));