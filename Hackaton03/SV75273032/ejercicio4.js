//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

const numero1 = parseInt(prompt("Ingresa el primer número entero:"));
const numero2 = parseInt(prompt("Ingresa el segundo número entero:"));
const numero3 = parseInt(prompt("Ingresa el tercer número entero:"));

let menor, medio, mayor;

if (numero1 <= numero2 && numero1 <= numero3) {
  menor = numero1;
  if (numero2 <= numero3) {
    medio = numero2;
    mayor = numero3;
  } else {
    medio = numero3;
    mayor = numero2;
  }
} else if (numero2 <= numero1 && numero2 <= numero3) {
  menor = numero2;
  if (numero1 <= numero3) {
    medio = numero1;
    mayor = numero3;
  } else {
    medio = numero3;
    mayor = numero1;
  }
} else {
  menor = numero3;
  if (numero1 <= numero2) {
    medio = numero1;
    mayor = numero2;
  } else {
    medio = numero2;
    mayor = numero1;
  }
}

console.log(`Los números ordenados de menor a mayor son: ${menor}, ${medio}, ${mayor}`);