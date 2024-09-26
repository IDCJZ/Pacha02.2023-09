//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
// Función para verificar si un número es perfecto
function esNumeroPerfecto(numero) 
{
    if (numero <= 1)
     {
      return false; 
    }
  
    let sumaDivisores = 1; 
  
    for (let i = 2; i <= Math.sqrt(numero); i++)
     {
      if (numero % i === 0) 
      {
        sumaDivisores += i;
  
        if (i !== numero / i) 
        {
          sumaDivisores += numero / i;
        }
      }
    }
  
    return sumaDivisores === numero;
  }

  const numero = parseInt(prompt('Ingrese un número para verificar si es un número perfecto:'));
  
  if (esNumeroPerfecto(numero)) 
  {
    console.log(`${numero} es un número perfecto.`);
  } 
  else 
  {
    console.log(`${numero} no es un número perfecto.`);
  }
  