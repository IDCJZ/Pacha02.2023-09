//Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"
String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/gi, vowel);
}
const str = "apples and bananas";
const vowel = "u";
const result = str.vreplace(vowel);
console.log(result); // "upplus und bununus"
