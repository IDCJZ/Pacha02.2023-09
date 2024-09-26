/*Escriba una función, .vreplace () que extienda el prototipo de cadena 
reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"

*/
String.prototype.vreplace = function(vowel) {
    let regex = /[aeiou]/gi;
    return this.replace(regex, vowel);
  }
  console.log("apples and bananas".vreplace("u")); 