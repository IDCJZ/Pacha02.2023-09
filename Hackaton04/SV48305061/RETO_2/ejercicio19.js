/*
Cree una función que tome dos argumentos (elemento, tiempos).
 El primer argumento (elemento) es el elemento que necesita repetirse,
  mientras que el segundo argumento (veces) es la cantidad de veces que se 
debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]

*/
function repetir(elementos, tiempos) {
    let resultado = [];
    for (let i = 0; i < tiempos; i++) {
      resultado.push(elementos);
    }
    return resultado;
  }
  console.log(repetir(13, 5));