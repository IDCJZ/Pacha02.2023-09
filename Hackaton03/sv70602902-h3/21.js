//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function suma(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let numero = parseInt(prompt("Ingrese un número para calcular la suma de los n primeros números: "));
console.log("La suma de los " + numero + " primeros números es " + suma(numero));
