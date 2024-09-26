// Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(objeto) {
    const matriz = [];
  
    for (const clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        matriz.push([clave, objeto[clave]]);
      }
    }
  
    return matriz;
  }
  
  // Ejemplo de invocación de la función
  const miObjeto = {
    likes: 2,
    dislikes: 3,
    followers: 10
  };
  
  const resultado = objectToArray(miObjeto);
  console.log(resultado); // [["likes", 2], ["dislikes", 3], ["followers", 10]]
  