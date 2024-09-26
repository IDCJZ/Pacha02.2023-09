/*Cree una función para multiplicar todos los valores en una matriz 
por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/


function multiplyByLength(array) {
    let resultado = [];
    for (let elementos of array) {
      resultado.push(elementos * array.length);
    }
    return resultado;
  }
  console.log(multiplyByLength([2, 3, 1, 0])); 