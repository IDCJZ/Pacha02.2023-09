//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
let nota1 = prompt(" ingrese la primer nota");
let nota2 = prompt(" ingrese la segunda nota");
let nota3 = prompt(" ingrese la tercer nota");
let promedio = (((parseFloat(nota1))+(parseFloat(nota2))+(parseFloat(nota3)))/3)
if (promedio>=13){
    console.log(" Felicidades aprobaste con ", promedio.toFixed(2))
}
else{
    console.log(" desaprobaste con ", promedio.toFixed(2))
}

