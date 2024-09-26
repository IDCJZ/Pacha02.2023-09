//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

function calcularCocienteYResto(dividendo, divisor)
 {
    if (divisor === 0) 
    {
      return "El divisor no puede ser cero.";
    }
  
    let cociente = 0;
    let resto = dividendo;
  
    while (resto >= divisor) 
    {
      resto -= divisor;
      cociente++;
    }
  
    return { cociente, resto };
  }
  
  const dividendo = parseInt(prompt('Ingrese el dividendo:'));
  const divisor = parseInt(prompt('Ingrese el divisor:'));
  
  const resultado = calcularCocienteYResto(dividendo, divisor);
  
  if (typeof resultado === "string") 
  {
    console.log(resultado);
  } 
  else
  {
    console.log(`Cociente: ${resultado.cociente}`);
    console.log(`Resto: ${resultado.resto}`);
  }
  