//Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
function findLargestNums(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        result.push(max);
    }
    return result;
}
const arr = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
const result = findLargestNums(arr);
console.log(result); // [7, 90, 2]
