//11.Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

const number1 = 10;

const number2 = 10;

if (number1 === number2) {
  console.log(`los 2 numeros son iguales con el valor de: ${number1}`);
} else {
  if (number1 > number2) {
    console.log(`el numero ${number1} es mayo que ${number2}`);
  } else {
    console.log(`el numero ${number2} es mayo que ${number1}`);
  }
}