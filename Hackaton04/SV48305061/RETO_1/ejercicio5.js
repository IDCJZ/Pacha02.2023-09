let numero1= Number(prompt("escribe el primero numero"))
let numero2=Number(prompt("escribe el segundo numero"))
let numero3=Number(prompt("Elige una operacion: 1 SUMA, 2 RESTA, 3 DIVIDIR, 4 MULTIPLICAR, 5 PORCENTAJE"))
let resultado;

function calculator(numero1, numero2, numero3) {
    switch (numero3) {
        case 1:
            console.log("Haz seleccionado la opccion suma")
            resultado= numero1+numero2;
            return resultado;

            break;
        case 2:  
            console.log("Haz seleccionado la opccion resta")
            resultado= numero1-numero2;
            return resultado;
            break;
        case 3:
            console.log("Haz seleccionado la opccion dividir")
            resultado= numero1/umero2; 
            return resultado;   
            break;
        case 4:
            console.log("Haz seleccionado la opccion multiplicar")
            resultado= numero1*numero2;
            return resultado;    
            break;        
        case 5:
            console.log("Haz seleccionado la opccion porcentaje")
            resultado= numero1%numero2; 
            return resultado;   
            break;
        default:
            console.log("El parámetro no es reconocido")
            break;
    }
}
console.log(calculator(numero1,numero2,numero3))