/*Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, 
en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/

function ordenador(...rest){

let datos=[...rest]
let datos1=[...rest]
datos.sort(function(a,b){return a-b})
datos1.sort(function(a,b){return b-a})
console.log( datos[0],datos1[0])
return datos,datos1;
}

ordenador(1, 2, 3, 4, 5)









