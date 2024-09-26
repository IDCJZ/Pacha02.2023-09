//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
let potencia = prompt("ingrese la potencia");
let numero = prompt(" ingresa el numero a potenciar");
const arrow_potencia = (potencia,numero) => {
    console.log(numero**potencia)
}
arrow_potencia(potencia,numero)