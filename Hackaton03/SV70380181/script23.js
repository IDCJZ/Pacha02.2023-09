//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

function sumaImparesHastaN(n) 
{
    let suma = 0;
  
    for (let i = 1; i <= n; i += 2)
    {
      suma += i;
    }
  
    return suma;
}
  
  const n = parseInt(prompt('Ingrese un número para calcular la suma de impares menores o iguales:'));
  
  const resultado = sumaImparesHastaN(n);
  console.log(`La suma de números impares menores o iguales a ${n} es: ${resultado}`);
  