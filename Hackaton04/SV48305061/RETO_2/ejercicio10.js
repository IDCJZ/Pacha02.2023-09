/*
Escriba una función que convierta un objeto en una matriz, donde cada elemento
 representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/

function array (a){
//const rest=({ a: 1, b: 2 })
const matriz = Object.entries(a);
console.log(matriz);
return matriz;
}
array (({a: 1, b: 2}));