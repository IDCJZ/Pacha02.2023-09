// Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(arr) {
    return arr.filter(elemento => typeof elemento === 'number' && Number.isInteger(elemento));
  }
  
  // Ejemplo de invocación de la función
  const resultado = filterList([1, 2, 3, "x", "y", 10]);
  console.log(resultado); // [1, 2, 3, 10]
  