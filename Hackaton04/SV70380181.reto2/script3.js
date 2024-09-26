//3
function obtenerTipoDeValor(valor)
{
    return typeof valor;
}
  
  console.log(obtenerTipoDeValor(42)); // "number"
  console.log(obtenerTipoDeValor("Hola")); // "string"
  console.log(obtenerTipoDeValor(true)); // "boolean"
  console.log(obtenerTipoDeValor(null)); // "object"
  console.log(obtenerTipoDeValor(undefined)); // "undefined"
  console.log(obtenerTipoDeValor([])); // "object"
  console.log(obtenerTipoDeValor({})); // "object"
  console.log(obtenerTipoDeValor(function() {})); // "function"
  