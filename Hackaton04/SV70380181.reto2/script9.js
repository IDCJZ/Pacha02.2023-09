//9
function encontrarIndicesDeCaracter(palabra, caracter) 
{
    const indices = [];
    for (let i = 0; i < palabra.length; i++) 
    {
      if (palabra[i] === caracter) 
      {
        indices.push(i);
      }
    }
  
    if (indices.length === 0) 
    {
      return "El carácter no se encuentra en la palabra.";
    }
  
    return [indices[0], indices[indices.length - 1]];
}
  
  const palabra = "elefante";
  const caracter = "e";
  const indices = encontrarIndicesDeCaracter(palabra, caracter);
  console.log("Primer índice:", indices[0]);
  console.log("Último índice:", indices[1]); 
  