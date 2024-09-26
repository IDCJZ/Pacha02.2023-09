/*Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/
console.log("Esto es una potencia cubica")

function potencia(numero1, numero2, numero3) {
console.log("La potencia cubica de 1-5-9 y su suma es: ")
let resultado=Math.pow(numero1,3)+ Math.pow(numero2,3)+ Math.pow(numero3,3);
return resultado;
}
console.log(potencia(1, 5, 9))