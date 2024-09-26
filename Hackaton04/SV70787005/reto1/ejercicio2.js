// Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function potencia(potencia, numero){
    resultado = numero;
    for (let i = 2; i <= potencia; i++) {
         resultado = resultado * numero;
    }
    console.log(resultado);
}

potencia(4,5)