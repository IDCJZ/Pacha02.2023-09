// Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function findNemo(cadena) {
    const palabras = cadena.split(' ');
    const posicion = palabras.findIndex(palabra => palabra === 'Nemo');
    
    if (posicion !== -1) {
      return `I found Nemo at ${posicion + 1}!`;
    } else {
      return "Nemo not found :(";
    }
  }
  
  // Ejemplo de invocación de la función
  const resultado = findNemo("I am finding Nemo !");
  console.log(resultado); // "I found Nemo at 4!"
  