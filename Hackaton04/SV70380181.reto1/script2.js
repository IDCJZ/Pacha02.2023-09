//2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function calcularPotencia(base, exponente) 
{
    let resultado = 1;
    for (let i = 0; i < exponente; i++) 
    {
      resultado *= base;
    }
    return resultado;  
}
  
  let base = 2;
  let exponente = 3;
  let potencia = calcularPotencia(base, exponente);
  console.log(`${base} elevado a la ${exponente} es igual a ${potencia}`);
  