/*Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz 
(única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

*/
function ordenador(...rest){
//ordenador=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
let ordenador=rest
let datos1=ordenador[0];
let datos2=ordenador[1];
let datos3=ordenador[2];
datos1.sort(function(a,b){return b-a})
console.log(datos1[0])
datos2.sort(function(a,b){return b-a})
console.log(datos2[0])
datos3.sort(function(a,b){return b-a})
console.log(datos3[0])
let resultado=[datos1[0],datos2[0],datos3[0]]
console.log(resultado)

}
//ordenador=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
ordenador([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0])