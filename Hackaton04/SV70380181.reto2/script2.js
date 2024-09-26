//2
function sumaDeCubos(...numeros) 
{
    let suma = 0;
    for (let numero of numeros)
    {
      suma += Math.pow(numero, 3);
    }
    return suma;
}
  
  let resultado = sumaDeCubos(1, 2, 3, 4);
  console.log("La suma de los cubos es: " + resultado);
  