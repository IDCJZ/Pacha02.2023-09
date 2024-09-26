//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function factorial(n) {
    if (n < 0) {
        return "El factorial de números negativos no existe.";
    } else if (n == 0) {
        return 1;
    } else {
        let numeros = [];
        for (let i = 1; i <= n; i++) {
            numeros.push(i);
        }
        return numeros.reduce((a, b) => a * b);
    }
}

let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
console.log("El factorial de " + numero + " es " + factorial(numero));
