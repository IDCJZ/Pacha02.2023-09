//7
function formatoNumeroDeTelefono(array) 
{
    if (array.length !== 10) 
    {
      return "La matriz debe contener 10 enteros.";
    }
  
    const codigoDeArea = array.slice(0, 3).join("");
    const prefijo = array.slice(3, 6).join("");
    const numero = array.slice(6).join("");
  
    return `(${codigoDeArea}) ${prefijo}-${numero}`;
}
  
  const numeros = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numeroDeTelefono = formatoNumeroDeTelefono(numeros);
  console.log("Número de teléfono:", numeroDeTelefono); // "(512) 345-6789"
  