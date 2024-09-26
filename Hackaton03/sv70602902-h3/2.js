// 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
let numerox = prompt("ingrese el numero");
if (isNaN(numerox)) {
    console.log(" solo numeros enteros")
}
else {
    if (numerox < 0){
        console.log( "este numero es negativo")
    }
    else {
        console.log( "es positivo")
    }
}