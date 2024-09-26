//8.Hacer un algoritmo en JavaScript para calcular
//el promedio de tres notas y determinar si el estudiante aprobó o no.

const notas = [12];
const notaAprobatoria = 14;
let sumaNotas = 0;

for (let i = 0; i < 3; i++) {
  const numberRamdon = Math.floor(Math.random() * 21);

  // notas.push(numberRamdon);
  notas[i] = numberRamdon;
}

for (let i = 0; i < 3; i++) {
  sumaNotas = sumaNotas + notas[i];
}
const promedio = sumaNotas / 3;
console.log(notas);
console.log(promedio);
if (promedio >= notaAprobatoria) {
  console.log("Usted Aprobo con: ", promedio);
} else {
  console.log("Usted desaprobo con: ", promedio);
}