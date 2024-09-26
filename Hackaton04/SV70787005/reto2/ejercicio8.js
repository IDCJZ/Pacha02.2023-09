// Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const findLargestNums = (matrix) => {
    const mayores = [];
    for (const submatriz of matrix) {
        const mayor = Math.max(...submatriz);
        mayores.push(mayor);
    }
    return mayores;
}
const matriz = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
const mayores = findLargestNums(matriz);
console.log(mayores); // [7, 90, 2]