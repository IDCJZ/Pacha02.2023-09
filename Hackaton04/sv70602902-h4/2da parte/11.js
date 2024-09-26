//Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

//getBudgets([
    //{ name: "John", age: 21, budget: 23000 },
    //{ name: "Steve",  age: 32, budget: 40000 },
    //{ name: "Martin",  age: 16, budget: 2700 }
  //]) ➞ 65700
  function getBudgets(arr) {
    let totalBudget = arr.reduce((acc, cur) => acc + cur.budget, 0);
    return totalBudget;
}
const arr = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];
  const result = getBudgets(arr);
  console.log(result);
  