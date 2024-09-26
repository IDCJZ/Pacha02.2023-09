// Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
function diffMaxMin(arr) {
    const minimo = Math.min(...arr);
    const maximo = Math.max(...arr);
  
    return maximo - minimo;
  }
  
  // Ejemplo de invocación de la función
  const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
  console.log(resultado); // 82
  