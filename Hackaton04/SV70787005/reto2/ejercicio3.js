// Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const obtenerTipoDeValor = (valor)=> {
  return typeof valor;
}
console.log(obtenerTipoDeValor(5)); // "number"
console.log(obtenerTipoDeValor("Hola")); // "string"
console.log(obtenerTipoDeValor(true)); // "boolean"
console.log(obtenerTipoDeValor([])); // "object" (¡cuidado con esto!)
console.log(obtenerTipoDeValor({})); // "object"
console.log(obtenerTipoDeValor(null)); // "object"
console.log(obtenerTipoDeValor(undefined)); // "undefined"
console.log(obtenerTipoDeValor(function() {})); // "function"