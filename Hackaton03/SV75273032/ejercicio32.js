//Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
do {
    // Coloca aquí el código que deseas que se ejecute repetidamente.
  
    // Puedes solicitar la entrada del usuario para continuar o salir del programa.
    const continuar = prompt("¿Deseas continuar? (Escribe 'si' para continuar, o cualquier otra cosa para salir)").toLowerCase();
  
    // Verifica si el usuario quiere continuar o salir del bucle.
    if (continuar !== 'si') {
      break; // Sale del bucle si el usuario no quiere continuar.
    }
  
  } while (true); // El bucle se ejecutará indefinidamente hasta que el usuario decida salir.
  
  // El programa continuará aquí después de que el usuario decida salir.
  console.log("Programa finalizado.");