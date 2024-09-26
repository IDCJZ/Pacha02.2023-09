Proceso MediaListaIndefinida
	 
		Definir numero, suma, cantidad Como Entero
		suma <- 0
		cantidad <- 0
		
		Escribir "Ingrese una lista de números positivos. Ingrese un número negativo para terminar."
		Leer numero
		
		Mientras numero >= 0 Hacer
			suma <- suma + numero
			cantidad <- cantidad + 1
			Leer numero
		Fin Mientras
		
		Si cantidad > 0 Entonces
			Escribir "La media de los números ingresados es: ", suma / cantidad
		Sino
			Escribir "No se ingresaron números positivos."
		Fin Si

FinProceso
