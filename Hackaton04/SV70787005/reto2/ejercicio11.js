// Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

function getBudgets(personas) {
    const sumaPresupuestos = personas.reduce((total, persona) => total + persona.budget, 0);
    return sumaPresupuestos;
  }
  
  // Ejemplo de invocación de la función
  const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];
  
  const resultado = getBudgets(personas);
  console.log(resultado); // 65700
  