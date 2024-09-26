//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
function multiplyByLength(arr) {
    return arr.map(x => x * arr.length);
}
const arr = [2, 3, 1, 0];
const result = multiplyByLength(arr);
console.log(result); // [8, 12, 4, 0]
