// Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
String.prototype.vreplace = function(nuevaVocal) {
    // Utilizamos una expresión regular para buscar todas las vocales (mayúsculas y minúsculas)
    const regex = /[aeiouAEIOU]/g;
    
    // Reemplazamos todas las vocales con la nueva vocal especificada
    const resultado = this.replace(regex, nuevaVocal);
    
    return resultado;
  };
  
  // Ejemplo de invocación del nuevo método
  const cadena = "Apples and bananas";
  const nuevaCadena = cadena.vreplace("u");
  console.log(nuevaCadena); // "upplus und bununus"
  