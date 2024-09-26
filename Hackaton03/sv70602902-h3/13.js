//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

function esPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
let numero = parseInt(prompt("Ingrese un número entero positivo: "));
if (numero >= 1 && numero < 10) {
    if (esPrimo(numero)) {
        console.log(numero + " es un número primo.");
    } else {
        console.log(numero + " no es un número primo.");
    }
} else {
    console.log("El número debe estar entre 1 y 9.");
}

