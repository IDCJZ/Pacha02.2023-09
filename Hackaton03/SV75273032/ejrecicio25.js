//Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
// 1. Solicita al usuario que ingrese el dividendo y el divisor.
const dividendo = parseInt(prompt("Ingresa el dividendo (número entero positivo):"));
const divisor = parseInt(prompt("Ingresa el divisor (número entero positivo distinto de cero):"));

// 2. Verifica que los valores ingresados sean válidos.
if (dividendo >= 0 && divisor > 0) {
  let cociente = 0;
  let resto = dividendo;

  // 3. Realiza restas sucesivas para calcular el cociente y el resto.
  while (resto >= divisor) {
    resto -= divisor;
    cociente++;
  }

  // 4. Muestra el cociente y el resto.
  console.log(`Cociente: ${cociente}`);
  console.log(`Resto: ${resto}`);
} else {
  console.log("Los valores ingresados no son válidos. Asegúrate de ingresar números enteros positivos.");
}