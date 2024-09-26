//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
let numeros = [];
let numero = parseInt(prompt("Ingrese un número positivo: "));
while (numero >= 0) {
    numeros.push(numero);
    numero = parseInt(prompt("Ingrese otro número positivo o un número negativo para terminar: "));
}
if (numeros.length == 0) {
    console.log("No se ingresaron números positivos.");
} else {
    let suma = numeros.reduce((a, b) => a + b);
    let media = suma / numeros.length;
    console.log("La media de los números ingresados es " + media + ".");
}
