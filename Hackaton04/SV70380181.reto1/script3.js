//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumaDeCubos() 
{
    let suma = 0;
    for (let i = 0; i < arguments.length; i++)
    {
      suma += Math.pow(arguments[i], 3); 
    }
    return suma;
}
  

  let resultado = sumaDeCubos(1, 2, 3, 4);
  console.log("La suma de los cubos es: " + resultado);
  