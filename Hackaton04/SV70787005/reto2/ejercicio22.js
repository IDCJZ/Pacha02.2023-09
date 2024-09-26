// Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"
function capLast(cadena) {
    const palabras = cadena.split(' ');
    
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];
      const longitud = palabra.length;
      
      if (longitud > 0) {
        palabras[i] = palabra.slice(0, longitud - 1) + palabra.charAt(longitud - 1).toUpperCase();
      }
    }
    
    return palabras.join(' ');
  }
  
  // Ejemplo de invocación de la función
  const resultado = capLast("hello world");
  console.log(resultado); // "hellO worlD"
  