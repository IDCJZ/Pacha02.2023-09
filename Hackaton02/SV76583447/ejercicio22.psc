Proceso sumaPrimerosNumeros
	definir suma,n como entero
	escribir "Ingresar numero"
	leer n
	suma <- 0
	
	Para x <- 1 Hasta n Con Paso 1 Hacer
		suma <- suma + x
	Fin Para
	
	Escribir "Suma de los ",n," primeros numeros es ",suma
FinProceso

