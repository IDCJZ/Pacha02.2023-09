//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function factorial(n) {
    if (n < 0) {
        return "El factorial de números negativos no existe.";
    } else if (n == 0) {
        return 1;
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}

let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
console.log("El factorial de " + numero + " es " + factorial(numero));
