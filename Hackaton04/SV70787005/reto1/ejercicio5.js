// Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), 
// y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 PREGUNTAS:
function calculadora(num1,num2,operacion){
    switch (operacion) {
        case "+":
            console.log(parseInt(num1+num2));
            break;
        case "-":
            console.log(parseInt(num1-num2));
            break;
        case "*":
            console.log(parseInt(num1*num2));
            break;
        case "/":
            console.log(parseInt(num1/num2));
            break;
        case "%":
            console.log(parseInt(num1%num2));
            break;
        default:
            console.log("El parametro no es reocnocido, operadores validos son (+,-,/,x,%)")
            break;
    }
}
calculadora(5,2,"s")