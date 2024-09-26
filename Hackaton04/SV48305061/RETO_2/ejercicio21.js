/*Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y 
devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

*/
function findNemo(palabra) {
    let buscar= palabra.split(" ");
    let index = buscar.indexOf("Nemo");
    if (index >= 0) {
      let posicion = index + 1;
      return "¡Encontré a Nemo en " + posicion + "!";
    } else {
      return "No encontré a Nemo :(";
    }
  }
  console.log(findNemo("I am finding Nemo !"));