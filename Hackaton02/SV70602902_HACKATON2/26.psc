Proceso RestoCociente
		Definir dividendo, divisor, cociente, resto Como Entero

		Escribir "Ingrese el dividendo:"
		Leer dividendo
		Escribir "Ingrese el divisor:"
		Leer divisor
		
		cociente <- 0
		resto <- dividendo
		
		Mientras resto >= divisor Hacer
			resto <- resto - divisor
			cociente <- cociente + 1
		Fin Mientras
		
		Escribir "El cociente es: ", cociente
		Escribir "El resto es: ", resto
FinProceso
