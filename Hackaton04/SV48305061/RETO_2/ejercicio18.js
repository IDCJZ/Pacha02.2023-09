/*Cree una función en js que filtre las cadenas de una matriz 
y devuelva una nueva matriz que solo contenga enteros.\nfilterList
([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/
function filtrado_lista(array) {
    
    let resultado = array.filter(function(elemento) {
      return typeof elemento === "number";
    });
    return resultado;
  }
  console.log(filtrado_lista([1, 2, 3, "x", "y", 10]));