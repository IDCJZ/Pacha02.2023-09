//6
function encontrarMinimoMaximo(array) 
{
    if (array.length === 0) 
    {
      return [undefined, undefined];
    }
  
    let minimo = array[0];
    let maximo = array[0];
  
    for (let i = 1; i < array.length; i++) 
    {
      if (array[i] < minimo) 
      {
        minimo = array[i];
      }
      if (array[i] > maximo) 
      {
        maximo = array[i];
      }
    }
  
    return [minimo, maximo];
  }
  
  const numeros = [3, 1, 9, 4, 5, 2, 8];
  const [minimo, maximo] = encontrarMinimoMaximo(numeros);
  console.log("El número mínimo es:", minimo);
  console.log("El número máximo es:", maximo); 
  