//Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//¿Cuántos números son Pares?

//¿Cuál es el mayor de todos?

//Si el tercero es par, calcular el cuadrado del segundo.

//Si el primero es menor que el cuarto, calcular la media de los 4 números.

//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

const numero1 = parseInt(prompt("Ingresa el primer número:"));
const numero2 = parseInt(prompt("Ingresa el segundo número:"));
const numero3 = parseInt(prompt("Ingresa el tercer número:"));
const numero4 = parseInt(prompt("Ingresa el cuarto número:"));

// 2. Inicializa variables para realizar las operaciones.
let numerosPares = 0;
let mayor = numero1;

// 3. Verifica cuántos números son pares.
if (numero1 % 2 === 0) {
  numerosPares++;
}
if (numero2 % 2 === 0) {
  numerosPares++;
}
if (numero3 % 2 === 0) {
  numerosPares++;
}
if (numero4 % 2 === 0) {
  numerosPares++;
}

// 4. Encuentra el número mayor de todos.
if (numero2 > mayor) {
  mayor = numero2;
}
if (numero3 > mayor) {
  mayor = numero3;
}
if (numero4 > mayor) {
  mayor = numero4;
}

// 5. Realiza operaciones adicionales según las condiciones.
if (numero3 % 2 === 0) {
  const cuadradoSegundo = numero2 * numero2;
  console.log(`El cuadrado del segundo número es: ${cuadradoSegundo}`);
}

if (numero1 < numero4) {
  const media = (numero1 + numero2 + numero3 + numero4) / 4;
  console.log(`La media de los 4 números es: ${media}`);
}

if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
  const sumaTotal = numero1 + numero2 + numero3 + numero4;
  console.log(`La suma de los 4 números es: ${sumaTotal}`);
}

// 6. Muestra los resultados.
console.log(`Cantidad de números pares: ${numerosPares}`);
console.log(`El número mayor es: ${mayor}`);
