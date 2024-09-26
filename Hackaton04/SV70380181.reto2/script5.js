//5
function filtrarStrings(array) 
{
    return array.filter(valor => typeof valor === 'string');
}
  
  const valores = [1, 'Hola', true, 'Mundo', 42, 'JavaScript'];
  const valoresFiltrados = filtrarStrings(valores);
  console.log(valoresFiltrados); // Imprimirá ["Hola", "Mundo", "JavaScript"]
  