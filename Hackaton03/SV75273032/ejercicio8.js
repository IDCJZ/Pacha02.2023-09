//Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

const nota1 = parseFloat(prompt("Ingresa la primera nota:"));
const nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
const nota3 = parseFloat(prompt("Ingresa la tercera nota:"));


let resultado = (nota1 + nota2 + nota3) / 3

if(resultado < 11){
    console.log("estas desaprobado")
}
else if(resultado > 10){
    console.log("estas aprobado felicidades")
}
else{
    console.log("algo salio mal")
}