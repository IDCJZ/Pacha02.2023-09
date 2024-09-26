//Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]
function countdown(n) {
    let arr = [];
    for (let i = n; i >= 0; i--) {
        arr.push(i);
    }
    return arr;
}
const n = 5;
const result = countdown(n);
console.log(result); // [5, 4, 3, 2, 1, 0]
