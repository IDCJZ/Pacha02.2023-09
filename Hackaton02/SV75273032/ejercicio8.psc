//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.


	Algoritmo CalcularPromedioYVerificarAprobacion
		Definir nota1, nota2, nota3, promedio Como Real
		Definir notaAprobacion Como Real
		
		notaAprobacion <- 6  // Nota mínima para aprobar
		
		Escribir "Ingrese la primera nota:"
		Leer nota1
		
		Escribir "Ingrese la segunda nota:"
		Leer nota2
		
		Escribir "Ingrese la tercera nota:"
		Leer nota3
		
		// Calcular el promedio de las tres notas
		promedio <- (nota1 + nota2 + nota3) / 3
		
		Escribir "El promedio de las notas es: " + ConvertirATexto(promedio)
		
		// Verificar si el estudiante aprobó o no
		Si promedio >= notaAprobacion Entonces
			Escribir "El estudiante aprobó."
		Sino
			Escribir "El estudiante no aprobó."
		FinSi
FinAlgoritmo