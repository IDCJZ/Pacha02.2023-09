/*Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/
function contando(n) {
    let array = [];

    while (n >= 0) {
      array.push(n);
      n--;
    }
    return array;
  }
  console.log(contando(5)); 