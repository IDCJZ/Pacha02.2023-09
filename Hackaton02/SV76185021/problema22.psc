Proceso problema22
	Escribir "Ingresar n para una suma de los n primeros numeros: "
	Leer n
	contador <- 1
	suma <- 0
	Mientras contador <= n Hacer
		suma = suma + contador
		contador = contador + 1
	FinMientras
	Escribir "la suma de los primeros n numeros es: ",suma
FinProceso
