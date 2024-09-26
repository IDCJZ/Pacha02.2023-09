// Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
function repeat(elemento, veces) {
    const resultado = [];
  
    for (let i = 0; i < veces; i++) {
      resultado.push(elemento);
    }
  
    return resultado;
  }
  
  // Ejemplo de invocación de la función
  const resultado = repeat(13, 5);
  console.log(resultado); // [13, 13, 13, 13, 13]
  