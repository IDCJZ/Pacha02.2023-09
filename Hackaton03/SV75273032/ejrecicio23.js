//Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
let suma = 0;

// 1. Utiliza un bucle for para iterar a través de los números del 2 al 1000 (pares).
for (let i = 2; i <= 1000; i += 2) {
  suma += i;
}

// 2. Muestra el resultado de la suma.
console.log(`La suma de todos los números pares hasta 1000 es ${suma}`);