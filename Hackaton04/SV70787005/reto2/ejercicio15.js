// Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
function multiplyByLength(arr) {
    const longitud = arr.length;
    return arr.map(valor => valor * longitud);
  }
  
  // Ejemplo de invocación de la función
  const resultado = multiplyByLength([2, 3, 1, 0]);
  console.log(resultado); // [8, 12, 4, 0]
  