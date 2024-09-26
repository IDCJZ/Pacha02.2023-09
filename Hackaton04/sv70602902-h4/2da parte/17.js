//Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
function diffMaxMin(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
}
const arr = [10, 4, 1, 4, -10, -50, 32, 21];
const result = diffMaxMin(arr);
console.log(result); // 82
