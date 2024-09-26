//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function sumaImpares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

let numero = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a él: "));
console.log("La suma de los números impares menores o iguales a " + numero + " es " + sumaImpares(numero));
