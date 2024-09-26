//20
String.prototype.vreplace = function(vocalNueva) 
{

    return this.replace(/[aeiouAEIOU]/g, vocalNueva);
};

const miCadena = "Hola, mundo!";
const nuevaCadena = miCadena.vreplace("X");
console.log("Cadena original:", miCadena);
console.log("Cadena con vocales reemplazadas:", nuevaCadena);
