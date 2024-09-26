//1. Crea una función que retorne la suma de dos números.
let seguire = true
while (seguire){
let primer_numero = prompt("ingrese el primer numero")
let segundo_numero = prompt("ingrese el segundo numero")
function suma(primer_numero,segundo_numero){
    let resultado = parseFloat(primer_numero) + parseFloat(segundo_numero);
    return resultado;
}
console.log(suma(primer_numero,segundo_numero));
//("si quieres seguir 1 sino 0")
let seguir = prompt("si quieres seguir 1 sino 0")
if (seguir == 0) {
    seguire = false

}
}


let primer_numero = prompt("ingrese el primer numero")
let segundo_numero = prompt("ingrese el segundo numero")
const arrow_suma = (primer_numero,segundo_numero)=>console.log (primer_numero - segundo_numero)
arrow_suma (primer_numero,segundo_numero)










