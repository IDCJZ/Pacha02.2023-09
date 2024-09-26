// 1. Crea una función que retorne la suma de dos números. 

function suma (a,b){
    let resultado = a + b
    return resultado
}

let suma1 = suma(5,5)
console.log(suma1)

//2. Crea una función que retorne la potencia de un número dado, 
//esta función deberá recibir la potencia y el número a potenciar.

function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
  }
  
  const base = 2;
  const exponente = 3;
  const resultado = calcularPotencia(base, exponente);
  console.log(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);



// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(...numeros) {
    let suma = 0;
    for (const numero of numeros) {
      suma += Math.pow(numero, 3);
    }
    return suma;
  }
  
  const resultadoo = sumOfCubes(1, 5, 9);
  console.log(`La suma de los cubos es: ${resultado}`);



//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
//triArea(3, 2) ➞ 3



  function triArea(base, altura) {
    const area = (base * altura) / 2;
    return area;
  }
  
  // Ejemplo de uso:
  const basee = 3;
  const altura = 2;
  const resultadooo = triArea(base, altura);
  console.log(`El área del triángulo es: ${resultado}`);




//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y
//una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje 
//“El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function calculator(num1, operacion, num2) {
    let resultado;
  
    switch (operacion) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
      case 'x':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      case '%':
        resultado = num1 % num2;
        break;
      default:
        return "El parámetro no es reconocido";
    }
  
    return resultado;
  }
  
  const num1 = 2;
  const operacion = '*';
  const num2 = 3;
  const resultadoooo = calculator(num1, operacion, num2);
  console.log(`El resultado es: ${resultadoooo}`);