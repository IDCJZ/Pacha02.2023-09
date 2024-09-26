//20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

function esPar(numero) {
    return numero % 2 === 0;
  }
  
  const numero1 = parseInt(prompt('Ingrese el primer número:'));
  const numero2 = parseInt(prompt('Ingrese el segundo número:'));
  const numero3 = parseInt(prompt('Ingrese el tercer número:'));
  const numero4 = parseInt(prompt('Ingrese el cuarto número:'));
  
  let cantidadPares = 0;
  if (esPar(numero1)) cantidadPares++;
  if (esPar(numero2)) cantidadPares++;
  if (esPar(numero3)) cantidadPares++;
  if (esPar(numero4)) cantidadPares++;
 
  const mayorNumero = Math.max(numero1, numero2, numero3, numero4);

  let resultado = '';
  if (esPar(numero3))
   {
    const cuadradoSegundo = numero2 * numero2;
    resultado += `El cuadrado del segundo número es: ${cuadradoSegundo}\n`;
  }
  if (numero1 < numero4) 
  {
    const media = (numero1 + numero2 + numero3 + numero4) / 4;
    resultado += `La media de los 4 números es: ${media}\n`;
  }
  if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) 
  {
    const sumaTotal = numero1 + numero2 + numero3 + numero4;
    resultado += `La suma de los 4 números es: ${sumaTotal}\n`;
  }
 
  console.log(`Cantidad de números pares: ${cantidadPares}`);
  console.log(`El mayor de todos los números es: ${mayorNumero}`);
  console.log(resultado);
  