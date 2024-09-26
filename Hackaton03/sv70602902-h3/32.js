//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
let continuar = true;

while (continuar) {
  // Aquí va el código del programa

  // Preguntar al usuario si quiere continuar
  const respuesta = prompt('¿Quieres continuar? (s/n)');

  // Si la respuesta es "n", salir del ciclo
  if (respuesta === 'n') {
    continuar = false;
  }
}
