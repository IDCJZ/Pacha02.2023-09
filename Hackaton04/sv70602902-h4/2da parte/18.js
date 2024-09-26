//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
function filterList(arr) {
    return arr.filter(x => Number.isInteger(x));
}
const arr = [1, 2, 3, "x", "y", 10];
const result = filterList(arr);
console.log(result); // [1, 2, 3, 10]
