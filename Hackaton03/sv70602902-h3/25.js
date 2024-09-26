//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function division(dividendo, divisor) {
    let cociente = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }
    let resto = dividendo;
    return [cociente, resto];
}

let dividendo = parseInt(prompt("Ingrese el dividendo: "));
let divisor = parseInt(prompt("Ingrese el divisor: "));
let resultado = division(dividendo, divisor);
console.log("El cociente es " + resultado[0] + " y el resto es " + resultado[1] + ".");
