/*//Ejercicio1
let n1,n2,respuesta;
function suma(n1,n2){
    return n1 + n2;
}

n1 = parseInt(prompt('Numero 1 :'));
n2 = parseInt(prompt('Numero 2 :'));

respuesta = suma(n1,n2);
console.log(respuesta);

//Ejercicio2
let pot,n,respuesta;
function potencia(pot,n){
    return n ** pot;
}

pot = parseInt(prompt('Potencia :'));
n = parseInt(prompt('Numero :'));

respuesta = potencia(pot,n);
console.log(respuesta);

//Ejercicio3
let n1,n2,n3,respuesta;
function suma_de_cubos(n1,n2,n3){
    return n1**3 + n2**3 + n3**3;
}

n1 = parseInt(prompt('Numero 1 :'));
n2 = parseInt(prompt('Numero 2 :'));
n3 = parseInt(prompt('Numero 3 :'));

respuesta = suma_de_cubos(n1,n2,n3);
console.log(respuesta);

//Ejercicio4
let base,altura,respuesta;
function area_triangulo(base,altura){
    return (base*altura)/2;
}

base = parseInt(prompt('base :'));
altura = parseInt(prompt('altura :'));

respuesta = area_triangulo(base,altura);
console.log(respuesta);

//Ejercicio5
let n1,n2,operacion,respuesta;
function calculadora(n1,operacion,n2){
    let resultado;
    if(operacion === "+" || operacion === "-" || operacion === "/" || operacion === "x" || operacion === "%"){
        switch(operacion){
            case '+':
                resultado = n1 + n2;
                break;
            case '-':
                resultado = n1 - n2;
                break;
            case 'x':
                resultado = n1 * n2;
                break;
            case '/':
                resultado = n1 / n2;
                break;
            case '%':
                resultado = n1 % n2;
                break;
        }
        return resultado;
    }else{
        return alert('El parámetro no es reconocido');
    }
    
    
}

n1 = parseInt(prompt('Numero 1 :'));
operacion = prompt('operacion :')
n2 = parseInt(prompt('Numero 2 :'));

respuesta = calculadora(n1,operacion,n2);
console.log(respuesta);*/

/*Una funcion es un conjunto de codigo el cual su finalidad
es de agruparse y reutilizarse de una forma mas concisa.*/
/*Hasta 255 argumentos*/







