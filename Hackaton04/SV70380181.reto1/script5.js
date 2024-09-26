//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y
//una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function calculator(numero1, numero2, operacion) 
{
    let resultado;
  
    switch (operacion) 
    {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
      case "x":
        resultado = numero1 * numero2;
        break;
      case "/":
        resultado = numero1 / numero2;
        break;
      case "%":
        resultado = numero1 % numero2;
        break;
      default:
        return "El parámetro no es reconocido";
    }
  
    return resultado;
}
  
  // Ejemplo de uso:
  console.log(calculator(5, 3, "+")); // Suma: 8
  console.log(calculator(10, 2, "-")); // Resta: 8
  console.log(calculator(4, 7, "x")); // Multiplicación: 28
  console.log(calculator(10, 2, "/")); // División: 5
  console.log(calculator(15, 7, "%")); // Módulo: 1
  console.log(calculator(5, 3, "^")); // Mensaje de error: El parámetro no es reconocido
  