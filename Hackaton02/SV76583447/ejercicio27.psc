Proceso media__listaindefinida
	
	Definir c Como Entero
	Definir suma,x como real
	x = 1
	suma = 0
	c = 0
	Mientras x >= 0 Hacer
		Escribir "Ingresa un número"
		leer x
		si x >= 0 Entonces
			suma = suma + x
			c = c + 1
		FinSi
	FinMientras
	Escribir "La media de los numeros es:" ,suma/ c
FinProceso
