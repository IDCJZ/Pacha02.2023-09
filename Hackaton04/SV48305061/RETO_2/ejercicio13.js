/*Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

*/
function objectoToArray(objeto) {

    let resultado = [];
    for (let claves in objeto) {
      let valuar = objeto[claves];
      let resultado1 = [claves, valuar];
      resultado.push(resultado1);
    }
    return resultado;
  }
  

  console.log(objectoToArray({
    likes: 2,
    dislikes: 3,
    followers: 10}))
